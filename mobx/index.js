import { observable, action } from "mobx";

class RootStore  {
    @observable name = "hello";

    @action changeName(payload) {
        this.name = payload
    }
}

export default new RootStore();