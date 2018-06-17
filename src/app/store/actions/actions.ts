import { Action } from '@ngrx/store'
import * as types from './actions.types'
import { IPost }  from '../../posts/post';

export class GetAllPosts implements Action {
    type = types.GET_ALL_POSTS
    constructor() { }
}

export class GetAllPostsSuccess implements Action {
    type = types.GET_ALL_POSTS_SUCCESS
    constructor(public posts: IPost[]) { }
}

export class PostPost implements Action {
    type = types.POST_POST
    constructor(public post: IPost) { }
}

export class PostPostSuccess implements Action {
    type = types.POST_POST_SUCCESS
    constructor(public post: IPost) { }
}
