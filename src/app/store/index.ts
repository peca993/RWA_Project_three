import { ActionReducerMap } from "@ngrx/store";
import postReducer,{PostState} from './reducers/posts.reducer';
import 'rxjs'
import { IPost } from "../posts/post";

export interface State {
    posts: PostState 
}

export const rootReducer: ActionReducerMap<State> = {
    posts: postReducer
}