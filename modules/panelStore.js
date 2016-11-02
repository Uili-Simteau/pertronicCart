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
    @observable items = ["hello again", "got milk?"]
    @observable filter = ""
    @computed get filteredPanelOrder() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.items.filter(item => !this.filter || matchesFilter.test(item.value))
    }
    createItem(value) {
        this.items.push(value)
    }
    clearComplete = () => {
        const incompleteTodos = this.items.filter(item => !item.complete)
        this.items.replace(incompleteTodos)
    }
}

var store = window.store = new ItemStore

export default store