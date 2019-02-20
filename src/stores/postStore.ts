import { action, observable } from 'mobx';
import { IPostSerializer, IUserSerializer } from '../models';
import RootStore from './rootStore';

export default class PostStore {
    private rootStore: RootStore;
    @observable private postList: IPostSerializer[];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    public setPostList = async () => {
        try {
            const axiosInstance = this.rootStore.axiosStore.instance;
            const response = await axiosInstance.get('posts/');
            const postList = response.data;
            this.rootStore.postStore.postList = postList;
        } catch (error) {
            console.log(error);
        }
    };

    public getPostList = () => {
        return this.rootStore.postStore.postList;
    };

    public addPostList = async (
        user: string,
        content: string,
        favor: boolean
    ) => {
        try {
            const axiosInstance = this.rootStore.axiosStore.instance;
            const response = await axiosInstance.post<IPostSerializer>(
                'posts/',
                {
                    user: user,
                    content: content,
                    favor: favor
                }
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };
}
