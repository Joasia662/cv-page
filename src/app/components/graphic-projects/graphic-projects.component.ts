import { Component } from '@angular/core';
import { SlideInterface } from '../slider/slider.component';

@Component({
  selector: 'app-graphic-projects',
  templateUrl: './graphic-projects.component.html',
  styleUrls: ['./graphic-projects.component.scss']
})
export class GraphicProjectsComponent {

  slidesCadCompetition: SlideInterface[] = [
    { url: '/assets/cad-competition-1.png', title: 'cad competition 1' },
    { url: '/assets/cad-competition-2.png', title: 'cad competition 2' },
    { url: '/assets/cad-competition-3.png', title: 'cad competition 3' },
  ];

  slideRecepie: SlideInterface[] = [
    { url: '/assets/recipe1.png', title: 'recepie manager' },
    { url: '/assets/recepie2.png', title: 'recepie manager' },
  ];
  
  
  slides: SlideInterface[] = [
    { url: '/assets/coffee1.png', title: 'coffee' },
    { url: '/assets/coffee3.png', title: 'coffee' },
    { url: '/assets/coffee2.png', title: 'coffee' },

  ];
}
