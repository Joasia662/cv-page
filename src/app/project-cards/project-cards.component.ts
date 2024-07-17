import { Component } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})

/*
projects = [
    {
      title: '',
      imgPath: '',
      desc: '',
      repo: '',
      host: '',
      tech: {
        angular: {
          isPresent: false,
          isInProgress: false,
          version: '0.0'
        },
        NgRx: {
          isPresent: false,
          isInProgress: false,
        },
        Jasmine:{
          isPresent: false,
          isInProgress: false,
        },
        Matrials:{
          isPresent: false,
          isInProgress: false,
        }
      }
    }
  ]
*/
export class ProjectCardsComponent {

  constructor() {
    this.selectedItem = this.projects[0]
  }

  selectedItem: any = {}
  projects = [
    {
      title: 'Weather Forecast',
      imgPath: '../assets/WeatherForecastScreen.png',
      desc: "A Single Page Application that display a 5-day forecast for a city by name. ",
      isApiMine: false,
      apiLink:'https://openweathermap.org/forecast5',
      repo: 'https://github.com/Joasia662/Weather-Forecast',
      host: '',
      tech: {
        angular: {
          isPresent: false,
          isInProgress: false,
          version: '0.0'
        },
        NgRx: {
          isPresent: false,
          isInProgress: false,
        },
        Jasmine: {
          isPresent: false,
          isInProgress: false,
        },
        Matrials: {
          isPresent: false,
          isInProgress: false,
        }
      }
    }
  ]
  
  changeSelectedItem(){

  }

}
