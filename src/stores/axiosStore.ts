import axios, { AxiosInstance } from 'axios';
import RootStore from './rootStore';

export default class AxiosStore {
    private rootStore: RootStore;
    public instance: AxiosInstance;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    public create = async () => {
        try {
            this.rootStore.axiosStore.instance = axios.create({
                baseURL: 'https://instagrambackend.herokuapp.com/posts/'
            });
        } catch (error) {
            console.log(error);
        }
    };
}
