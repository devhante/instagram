import { IPostSerializer } from './post';

export interface ICommentSerializer {
    id: number;
    post: IPostSerializer;
    index: number;
    content: string;
}
