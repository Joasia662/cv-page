import { Component } from '@angular/core';
import * as Vara from 'vara';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-page';

  constructor(){
    
  }

  ngOnInit(){
  var vara = new Vara("#vara-container","https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",[{
    text:"Joanna Cepuch"
}],{
  fontSize:140
});
  }


}


//fonts/Pacifico
//fonts/Shadows-Into-Light
//fonts/Parisienne
//fonts/Satisfy