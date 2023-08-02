import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent {
  numberInput: number =0;

  @Output() numberChanged: EventEmitter<number> = new EventEmitter();

  btnClicked(){
  this.numberInput++;

  // for the event emitter to know if there is a change in number
  this.numberChanged.emit(this.numberInput);
  
    console.log('Number: '+this.numberInput);
  }

}
