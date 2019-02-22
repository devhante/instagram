import { action, observable } from 'mobx';
import RootStore from './rootStore';

export default class TabStore {
    private rootStore: RootStore;
    @observable private images: object[];
    @observable private next: boolean;
    @observable private content: string;
    @observable private selected: boolean;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.images = [];
        this.next = false;
        this.content = '';
        this.selected = false;
    }

    @action
    public setImages = (value: object[]) => {
        this.rootStore.addStore.images = value;
    };

    public getImages = () => {
        return this.rootStore.addStore.images;
    };

    @action
    public setNext = (value: boolean) => {
        this.rootStore.addStore.next = value;
    };

    public getNext = () => {
        return this.rootStore.addStore.next;
    };

    @action
    public setContent = (value: string) => {
        this.rootStore.addStore.content = value;
    };

    public getContent = () => {
        return this.rootStore.addStore.content;
    };

    @action
    public setSelected = (value: boolean) => {
        this.rootStore.addStore.selected = value;
    };

    public getSelected = () => {
        return this.rootStore.addStore.selected;
    };
}
