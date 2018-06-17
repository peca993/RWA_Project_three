import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import { PostService } from '../../posts/post.service';
import { GET_ALL_POSTS, POST_POST } from '../actions/actions.types';
import { map, switchMap } from 'rxjs/operators';
import { GetAllPosts , GetAllPostsSuccess,PostPost,PostPostSuccess } from '../actions/actions';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private service: PostService
    ) {}

    
    @Effect()
    getAll$ = this.actions$
        .ofType(GET_ALL_POSTS)
        .pipe(
            switchMap(() => {
                return this.service.getAllPosts()
                    .pipe(
                        map(posts => new GetAllPostsSuccess(posts))
                    )
            })
        )

    @Effect()
    post$ = this.actions$
        .ofType(POST_POST)
        .pipe(
            map(info => (info as PostPost).post),
            switchMap(post => {
                return this.service.postPost(post)
                    .pipe(
                        map(post => new PostPostSuccess(post))
                    )
            })
        )


}