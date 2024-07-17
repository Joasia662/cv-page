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

  constructor() {
    this.selectedIndex = 0;
  }

  selectedIndex: number
  projects = [
    {
      title: 'Weather Forecast',
      imgPath: '../assets/WeatherForecastScreen.png',
      desc: "A Single Page Application that display a 5-day forecast for a city by name. ",
      isApiMine: false,
      apiLink: 'https://openweathermap.org/forecast5',
      repo: 'https://github.com/Joasia662/Weather-Forecast',
      host: '',
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
      desc: `The application manage recipes. It allows users to create, edit, remove and list recipes. <b>It is currently in progress.</b>
       In next version all mentioned functionalities and state managment ngXs will be implemented.<br>
       This app currently uses mocks but in the near future it I will create an API for it in NodeJS`,
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
      desc: `Desktop Application implemented using C## language. It simulates grow of the grain using 4 different neighbourhood methods`,
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
      desc: `Windows Forms Application implementing the simulation: "Game of life (Life, The game of life)" - one of the first and most famous examples of a Cellular AutomatonTransition rules:<br>
<ul>
<li> Every dead cell (state 0) with three living neighbors (cells in state 1) is born (changes its state from 0 to 1) </li>
<li> Any living cell that has two or three living neighbors (cells in state 1) remains alive (maintains state 1) </li>
<li>Every living cell with more than 3 neighbors dies of "hunger" </li>
<li>Every living cell with fewer than two neighbors dies too, from "loneliness" </li>
</ul>

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

}
