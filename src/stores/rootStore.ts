import { configure } from 'mobx';
import TabStore from './tabStore';

configure({
    enforceActions: 'observed'
});

export default class RootStore {
    public tabStore: TabStore;
    constructor() {
        this.tabStore = new TabStore(this);
    }
}

const STORE_NAME = 'rootStore';

export interface IStoreInjectedProps {
    [STORE_NAME]?: RootStore;
}

export { RootStore, STORE_NAME };
