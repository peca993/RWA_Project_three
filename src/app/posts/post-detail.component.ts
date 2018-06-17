import { PostService } from './post.service';
import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../posts/post';
import { Store } from '@ngrx/store';
import { State } from '../store';


@Component({
  selector: 'app-post',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private store$: Store<State>
  ) { }

  @Input() 
  public post: IPost

  ngOnInit() {
  }

}