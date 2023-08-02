import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_01aug';
  leftEnabled:boolean=true;
  rightEnabled:boolean=true;

  //variable to store the number
  updatedNumber: number;

  changedNumber(eventNumber: any){
    this.updatedNumber = eventNumber;
    console.log('parent number:'+this.updatedNumber);
  }

  toggleLeft(){
    this.leftEnabled=!this.leftEnabled;

  }
  toggleRight(){
    this.rightEnabled=!this.rightEnabled;
  }
}
