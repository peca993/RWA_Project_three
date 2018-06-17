import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../posts/post';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { selectors as PostSelectors} from '../../store/reducers/posts.reducer';
import { PostPost } from '../../store/actions/actions';


@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {

  public post: IPost;
  public pTitle: string;
  public pText: string;
  
  constructor(
    private store$: Store<State>
  ) {
      
   }

  ngOnInit() { 
    
  }

  postPost(){
    this.post = new IPost(null,this.pTitle,this.pText);
    console.log(this.post);
    this.store$.dispatch(new PostPost(this.post))
  }
}
