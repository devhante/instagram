import { IUserSerializer } from './user';

export interface IPostSerializer {
    id: number;
    writer: IUserSerializer;
    content: string;
    favor: boolean;
}
