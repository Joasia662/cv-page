import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent },
  {path: 'projects', component: WebProjectsComponent},
  {path: '**', component: MainPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
