import { action, observable } from 'mobx';
import RootStore from './rootStore';

export default class TabStore {
    @observable private tabName: string;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.tabName = 'home';
    }

    @action
    public setTabName = (value: string) => {
        this.tabName = value;
    };

    public getTabName = () => {
        return this.tabName;
    };
}
