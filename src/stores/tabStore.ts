import { action, observable } from 'mobx';
import RootStore from './rootStore';

export default class TabStore {
    private rootStore: RootStore;
    @observable private tabName: string;
    @observable private addScreen: boolean;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.tabName = 'home';
        this.addScreen = true;
    }

    @action
    public setTabName = (value: string) => {
        this.rootStore.tabStore.tabName = value;
    };

    public getTabName = () => {
        return this.rootStore.tabStore.tabName;
    };

    @action
    public setAddScreen = (value: boolean) => {
        this.rootStore.tabStore.addScreen = value;
    };

    public getAddScreen = () => {
        return this.rootStore.tabStore.addScreen;
    };
}
