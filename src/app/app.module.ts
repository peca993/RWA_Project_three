import {EffectsModule, Actions} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import 'rxjs'

import {rootReducer} from './store'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from './post.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  MatCardModule,
  MatMenuModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule, 
  MatToolbarModule, 
  MatDividerModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { PostListComponent } from './posts/post-list.component';
import { PostService } from './posts/post.service';

import { PostEffects } from './store/effects/posts.effect';
import { MakePostComponent } from './components/make-post/make-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDetailComponent,
    PostListComponent,
    MakePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      PostEffects
    ])
    
  ],
  providers: [
    Actions,
    PostService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

