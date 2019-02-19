import { ICommentSerializer } from './comment';

export interface IReplySerializer {
    id: number;
    comment: ICommentSerializer;
    index: number;
    content: string;
}
