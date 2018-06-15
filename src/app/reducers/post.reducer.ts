import * as postAction from '../actions/posts.actions';

export function postReducer(state = [],action: postAction.Action){

    switch (action.type) {
        case postAction.LOAD_POSTS_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}