import axios, { AxiosInstance } from 'axios';
import RootStore from './rootStore';

export default class AxiosStore {
    private rootStore: RootStore;
    public instance: AxiosInstance;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.instance = this.create();
    }

    public create = () => {
        const response = axios.create({
            baseURL: 'https://instagrambackend.herokuapp.com/posts/'
        });
        return response;
    };
}
