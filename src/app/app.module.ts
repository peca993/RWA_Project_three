import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({posts: postReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
