import { Component } from '@angular/core';
import { SharedService } from './shared.service';
// import { colorr, colors } from './myData';                  //import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  // anyColor = colorr;                              //colorr from './myData'
  // arColors = colors;
  anyColor:any=[]
  constructor(private myService: SharedService){ // inside the constructor we declare private variable which will be the SharedService ts file
   this.anyColor = myService.test 
   myService.cngColor()
  }


  // cngColor() {
  //   this.anyColor = 'green'
  //   this.arColors.push("yellow")
  }

//now {{anyColor}} in app.component.html is connected to the shared data !
