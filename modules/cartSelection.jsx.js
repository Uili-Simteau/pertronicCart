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
            })
        }
    }



    )
})