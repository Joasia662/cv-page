import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { GraphicProjectsComponent } from './components/graphic-projects/graphic-projects.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './components/slider/slider.component';
import { WorkExpirienceComponent } from './components/work-expirience/work-expirience.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectCardsComponent } from './project-cards/project-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebProjectsComponent,
    GraphicProjectsComponent,
    MainPageComponent,
    SliderComponent,
    WorkExpirienceComponent,
    ProjectCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
