import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
