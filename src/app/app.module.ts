import { AppService } from './app.service';
import { InMemoryDataService } from './shared/mock-data/in-memory-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebCameraComponent} from './components/web-camera/web-camera.component';
import { AppRoutingModule } from './app.routing';
import { CameraTestComponent } from './pages/camera-test/camera-test.component';
import { SearchTestComponent } from './pages/search-test/search-test.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    WebCameraComponent,
    CameraTestComponent,
    SearchTestComponent,
    FormTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Material组件导入
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
