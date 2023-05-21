import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
// import { colorr } from '../myData';                 //import

@Component({
  selector: 'app-samp',
  templateUrl: './samp.component.html',
  styleUrls: ['./samp.component.css']
})
export class SampComponent {
  anyColor:string[] = []
  constructor(private myService: SharedService){ // inside the constructor we declare private variable which will be the SharedService ts file
    this.anyColor = myService.test 
   }
    
  }

  //now {{anyColor}} in samp.component.html is connected to the shared data !
