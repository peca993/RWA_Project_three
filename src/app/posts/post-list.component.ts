import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { IPost } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<IPost[]>;

  constructor(private _postService: PostService) {
    
   }

  ngOnInit() {
    this.posts$ = this._postService.getAllPosts();
    console.log(this.posts$);
  }

}
