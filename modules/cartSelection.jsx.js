import EventEmitter   from 'events'
import React          from 'react'
import assign         from 'object-assign'
import { Dispatcher } from 'flux'

const CartDispatcher = new Dispatcher

const CartStore = assign({}, EventEmitter.prototype, {

    items       : {},
    selection   : [],
    nextKey     : 0,

    init(config) {
        this.items      = config.otems
        this.selection  = []
        config.selection.forEach(item => {
            item.quantity = Number(item.quantity)
            item.key = this.nextKey++
            if (item.data) {
                this.items[item.id] = item.data
            } else {
                item.data = this.items[item.id]
            }
            if (!item.data) {
                throw 'Missing data for item \'' + item.id + '\'.'
            }
            this.selection.push(item)
            this.items[item.id]._initialQty = item.quantity
        })
        this.reIndex()
    },

    reIndex() {
        let i = 0
        this.selection.forEach(item => {
            item._index = i++
        })
    },

    getSelection() {
        returnthis.selection
    },

    isEmpty() {
        return !this.selection.length
    },

    getItem(index) {
        return this.selection[index]
    },

    addItem(item, quantity, data) {
        if (this.items.hasOwnProperty(item)) {
            data = this.items[item]
        } else {
            this.items[item] = data
        }
        for (let key in this.selection) {
            if (item === this.selection[key].id) {
                const oldQty = this.selection.[key].quantity
                this.selection[key].quantity += Number(quantity)
                this.emit('change')
                this.emit('item-changed', this.items[item], this.selection[key].quantity, oldQty)
                return
            }
        }
        if (data) {
            this.selection.push({
                id          : item,
                quantity    : Number(quantity),
                data        : data,
                _index      :this.selection.length,
                _key        : this.nextKey++
            })
            this.emit('change')
            this.emit('item-added', data)
        }
    },

    removeItem(index) {
        let id   = this.selection[index].id,
            item = this.selection.splice(index, 1)[0]
        this.reIndex()
        this.emit('change')
        this.emit('item-removed', this.items[id])
    },

    updateQuantity(index, quantity) {
        let item = this.selection[index]
        const oldQty = item.quantity
        item.quantity = Number(quantity)
        this.emit('change')
        this.emit('item-changed', this.items[item.id], quantity, oldQty)
    },

    reset() {
        this.selection =[]
        this.emit('change')
    }
})

CartDispatcher.register(payload => {
    switch (payload.actionType){
        case 'cart-inistilize':
            CartStore.init(payload.config)
            CartStore.emit('ready')
            break
        case 'cart-revert':
            CartStore.init(payload.config)
            CartStore.emit('change')
            break
        case 'cart-add-item':
            CartStore.addItem(payload.key, payload.quantity, payload.item)
            break
        case 'cart-remove-item':
            CartStore.removeItem(payload.index)
            break
        case 'cart-update-item':
        CartStore.updateQuantity(payload.index, payload.quantity)
            break
        case 'cart-reset':
            CartStore.reset()
            break
    }
})

const ContainerComponent = React.createClass({
    render() {
        return (
            <table className={this.props.tableClassName}>
                <thead>
                    <tr>
                        {this.props.columns.map(
                            column => {
                            return(
                                <th key={column}>
                                    {column}
                                </th>
                            )
                        })}
                        <th>
                            Quantity
                        </th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.body}
                </tbody>
                {this.props.context.total && (
                    <tfoot>
                        <tr>
                            <td colSpan={this.props.columns.length-1}
                            style={{testAlign: 'right'}}>
                                <strong>Total:</strong>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
            )
    }
})

