import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  test:string[]=["red"]      //global variable should be array
  // constructor() { }

  cngColor(){
    this.test.push("green")
  }
}
