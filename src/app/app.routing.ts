import { FormTestComponent } from './pages/form-test/form-test.component';
import { CameraTestComponent } from './pages/camera-test/camera-test.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTestComponent } from './pages/search-test/search-test.component';

const routes: Routes = [
  // {path: '', component: AppComponent, children: [
  //   { path: '', redirectTo: 'camera-test', pathMatch: 'full' },
  // ]},
  { path: 'camera-test', component: CameraTestComponent },
  { path: 'form-test', component: FormTestComponent },
  { path: 'search-test', component: SearchTestComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
