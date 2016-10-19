import { computed, observable } from "mobx"

class PanelOrder {
    @observable value
    @observable id
    @observable complete

    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

export class ItemStore {
    @observable items = []
    @observable filter = ""
    @completed get filteredPanelOrder() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.items.filter(items => !this.filter || matchesFilter.test(todo.value))
    }
    createItem(value) {
        this.items.push(new PanelOrder(value))
    }
    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos)
    }
}
export default new ItemStore