import { observable, action,makeAutoObservable } from "mobx";

class RootStore  {

    @observable name = "xxx";

    @action
    changeName = payload => {
        this.name = payload
    }

    constructor() {
        makeAutoObservable(this)
    }

}

export default new RootStore();