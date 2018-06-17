import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post';
import { Store } from '@ngrx/store';
import { State } from '../store/';
import { selectors as PostSelectors} from '../store/reducers/posts.reducer';
import { GetAllPosts } from '../store/actions/actions';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<IPost[]>;
  
  constructor(private store$: Store<State>) {
    this.posts$ = this.store$.select((state: State) => PostSelectors.selectAll(state.posts))
  
  }

  ngOnInit() {
    this.store$.dispatch(new GetAllPosts())
  }

  loguj(){
    console.log(this.posts$.source.source.source)
  }

}
