import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {IPost} from './post';

@Injectable()
export class PostService {
    private API_PATH = 'http://localhost:3000/';

    constructor(private _http: Http) { }

    postPost(post: IPost): Observable<IPost> {
        console.log('post:', post)
        return this._http.post(`${this.API_PATH}posts`, post)
            .pipe(
                map(() => post)
            )
    }

    getAllPosts(): Observable<IPost[]> {
        return this._http.get(`${this.API_PATH}posts`)
            .pipe(
                map(res => res.json() || [])
            )
    }
}