import { EasyDataDirective } from './shared/directives/easy-data.directive';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule,
   MatProgressSpinnerModule,
   MatCheckbox,
   MatCheckboxModule,
   MatSnackBarModule} from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebCameraComponent } from './components/web-camera/web-camera.component';
import { AppRoutingModule } from './app.routing';
import { CameraTestComponent } from './pages/camera-test/camera-test.component';
import { SearchTestComponent } from './pages/search-test/search-test.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SubToolbarComponent } from './components/sub-toolbar/sub-toolbar.component';
import { RichTextComponent } from './pages/rich-text/rich-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataDirectiveComponent } from './pages/data-directive/data-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    WebCameraComponent,
    CameraTestComponent,
    SearchTestComponent,
    FormTestComponent,
    ToolbarComponent,
    SubToolbarComponent,
    RichTextComponent,
    DataDirectiveComponent,
    EasyDataDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    // Material组件导入
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCheckboxModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
