import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebCameraComponent} from './web-camera/web-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    WebCameraComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
