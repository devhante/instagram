import { action, observable } from 'mobx';
import RootStore from './rootStore';

export default class TabStore {
    private rootStore: RootStore;
    @observable private tabName: string;
    @observable private addScreen: boolean;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.tabName = 'home';
        this.addScreen = false;
    }

    @action
    public setTabName = (value: string) => {
        this.tabName = value;
    };

    public getTabName = () => {
        return this.tabName;
    };

    @action
    public setAddScreen = (value: boolean) => {
        this.addScreen = value;
    };

    public getAddScreen = () => {
        return this.addScreen;
    };
}
