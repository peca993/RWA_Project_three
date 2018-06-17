import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from './post.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  MatMenuModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule, 
  MatToolbarModule, 
  MatDividerModule,
  MatChipsModule,
  MatDialogModule,
} from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { PostListComponent } from './posts/post-list.component';
import { PostService } from './posts/post.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDetailComponent,
    PostListComponent
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
    FormsModule,
    HttpModule
    
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
