import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import { PostService } from '../../posts/post.service';
import { GET_ALL_POSTS } from '../actions/actions.types';
import { map, switchMap } from 'rxjs/operators';
import { GetAllPosts , GetAllPostsSuccess } from '../actions/actions';

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

}