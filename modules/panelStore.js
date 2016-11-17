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
<<<<<<< HEAD
    @observable items = ["banana"]
=======
    @observable items = ["hello again", "got milk?"]
>>>>>>> 9123bc8337b4aaf564e3813c935e35c3f1a5891f
    @observable filter = ""
    @computed get filteredPanelOrder() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.items.filter(item => !this.filter || matchesFilter.test(item.value))
    }
    createItem(value) {
        this.items.push(new PanelOrder(value))
    }
    clearComplete = () => {
        const incompleteTodos = this.items.filter(item => !item.complete)
        this.items.replace(incompleteTodos)
    }
}

var store = window.store = new ItemStore

export default store