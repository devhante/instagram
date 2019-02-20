import { IUserSerializer } from './user';

export interface IPostSerializer {
    id: number;
    writer: IUserSerializer;
    content: string;
    date: Date;
    favor: boolean;
}
