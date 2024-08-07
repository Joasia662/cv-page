import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GraphicProjectsComponent } from './components/graphic-projects/graphic-projects.component';
import { WorkExpirienceComponent } from './components/work-expirience/work-expirience.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent },
  {path: 'projects', component: WebProjectsComponent},
  {path: 'graphic-designs', component: GraphicProjectsComponent},
  {path: 'work-expirience', component: WorkExpirienceComponent},

  {path: '**', component: MainPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
