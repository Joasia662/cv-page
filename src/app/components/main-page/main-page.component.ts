import { Component } from '@angular/core';
import * as Vara from 'vara';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(){
    
  }

  ngOnInit(){
  var vara = new Vara("#vara-container","https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",[{
    text:"Joanna Cepuch",
}],{
  fontSize:140,
  strokeWidth:1,
  textAlign:"center",
  
});
  }
}
