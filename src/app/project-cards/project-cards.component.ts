import { ComponentType } from '@angular/cdk/portal';
import { Component, TemplateRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
        ngRx: {
          isPresent: false,
          isInProgress: false,
        },
        jasmine:{
          isPresent: false,
          isInProgress: false,
        },
        materials:{
          isPresent: false,
          isInProgress: false,
        }
      }
    }
  ]
*/
export class ProjectCardsComponent {
  constructor(public dialog: MatDialog) {
    this.selectedIndex = 0;
  }

  selectedIndex: number
  projects = [
    {
      title: 'Weather Forecast',
      imgPath: '../assets/WeatherForecastScreen.png',
      desc: "A Single Page Application that displays a 5-day forecast for a city by name",
      isApiMine: false,
      apiLink: 'https://openweathermap.org/forecast5',
      repo: 'https://github.com/Joasia662/Weather-Forecast',
      host: 'http://35.159.179.207/weather-forecast',
      lightHouseReport: '../assets/WeatherForecastReport.png',
      tech: {
        angular: {
          isPresent: true,
          isInProgress: false,
          version: '0.0'
        },
        ngRx: {
          isPresent: true,
          isInProgress: false,
        },
        jasmine: {
          isPresent: true,
          isInProgress: false,
        },
        materials: {
          isPresent: true,
          isInProgress: false,
        },
        nodeJS: {
          isPresent: false,
          isInProgress: false,
        }
      }
    },
    {
      title: 'Single Page Cook Book',
      imgPath: '../assets/RecipeManager.png',
      desc: `The application manages recipes. It allows users to create, edit, remove and list recipes.
       <b>It is currently in progress.</b> In the next version, all mentioned functionalities and state management NgXs will be implemented.<br>
        This app currently uses mocks but I am currently working on API for it in NodeJS
`,
      isApiMine: true,
      repo: 'https://github.com/Joasia662/Recipes-Menager',
      host: '',
      tech: {
        angular: {
          isPresent: true,
          isInProgress: false,
          version: '0.0'
        },
        ngXs: {
          isPresent: false,
          isInProgress: true,
        },
        nodeJS: {
          isPresent: false,
          isInProgress: true,
        },

        materials: {
          isPresent: true,
          isInProgress: false,
        }
      }
    },{
      title: 'Grain Growth',
      imgPath: '../assets/Grain-Growth.png',
      desc: `Desktop Application implemented using C# language. It simulates the growth of the grain using 4 different neighbourhood methods. It was implemented as a university project.`,
      isApiMine: true,
      repo: 'https://github.com/Joasia662/Grain-Growth',
      host: '',
      tech: {
        windowsForm: {
          isPresent: true,
          isInProgress: false,
        }
      }
    },
    {
      title: 'Game Of Life',
      imgPath: '../assets/gameOfLife.png',
      desc: `Windows Forms Application implementing the simulation: "Game of life (Life, The game of life)" - one of the first and most famous examples of a Cellular Automaton. It was implemented as a university project. Transition rules:<br>
<br>Every dead cell (state 0) with three living neighbors (cells in state 1) is born (changes its state from 0 to 1)
<br>Any living cell that has two or three living neighbors (cells in state 1) remains alive (maintains state 1) 
<br>Every living cell with more than 3 neighbors dies of "hunger" 
<br>Every living cell with fewer than two neighbors dies too, from "loneliness" 

      `,
      isApiMine: true,
      repo: 'https://github.com/Joasia662/Game-Of-Life',
      host: '',
      tech: {
        windowsForm: {
          isPresent: true,
          isInProgress: false,
        }
      }
    },

    


  ]

  changeSelectedItem(actionName: string) {
    if (actionName === 'next') {
      this.selectedIndex + 1 === this.projects.length ? this.selectedIndex = 0 : this.selectedIndex++
    }
    else {
      this.selectedIndex === 0 ? this.selectedIndex = this.projects.length - 1 : this.selectedIndex--
    }

  }

  goToPage(url: string){
    window.open(
      url,
      '_blank' 
    );
  }

  OpenLightHouseReport(templateRef: TemplateRef<any>){
    
    let dialogRef = this.dialog.open(templateRef, {
      width: '1000px',
      height: '880px'
    });
   
  }

}
