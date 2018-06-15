import Post from '../posts/Post';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';

export class LoadPostsActions {
    readonly type = LOAD_POSTS;
    constructor() {}
}

export class LoadPostsActionsSuccess {
    readonly type = LOAD_POSTS_SUCCESS;
    constructor(public payload: Post[]) {}
}


export type Action 
    = LoadPostsActions
    | LoadPostsActionsSuccess