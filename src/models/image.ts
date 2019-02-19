import { IPostSerializer } from './post';

export interface IImageSerializer {
    id: number;
    post: IPostSerializer;
    index: number;
    image: string;
}
