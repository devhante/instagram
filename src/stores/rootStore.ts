import { configure } from 'mobx';
import AxiosStore from './axiosStore';
import PostStore from './postStore';
import TabStore from './tabStore';

configure({
    enforceActions: 'observed'
});

export default class RootStore {
    public axiosStore: AxiosStore;
    public postStore: PostStore;
    public tabStore: TabStore;
    constructor() {
        this.axiosStore = new AxiosStore(this);
        this.postStore = new PostStore(this);
        this.tabStore = new TabStore(this);
    }
}

const STORE_NAME = 'rootStore';

export interface IStoreInjectedProps {
    [STORE_NAME]?: RootStore;
}

export { RootStore, STORE_NAME };
