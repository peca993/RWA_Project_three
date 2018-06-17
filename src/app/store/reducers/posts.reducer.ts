import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { IPost } from '../../posts/post';
import { Action } from '@ngrx/store'
import { GET_ALL_POSTS,GET_ALL_POSTS_SUCCESS } from '../actions/actions.types';
import { GetAllPosts , GetAllPostsSuccess } from '../actions/actions';

export interface PostState extends EntityState<IPost> {

}

const adapter: EntityAdapter<IPost> = createEntityAdapter<IPost>()

const initialState: PostState = {
    ids: [],
    entities:{}
}

export default function (state: PostState = initialState, action: Action) {
    switch(action.type) {
        case GET_ALL_POSTS_SUCCESS: {
            const {posts} = action as GetAllPostsSuccess
            const clean = adapter.removeAll(state)
            return adapter.addMany(posts, state)
        }
        default: {
            return state
        }
    }   
}

export const selectors = adapter.getSelectors()