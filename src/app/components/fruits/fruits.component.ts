import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit{
 
// typescript 
//property binding
  // fruit: String="Durian";
  // title='hello,world';
  fullName: String ='Darryl Ng';
  //xx-large
  fontSize:String='xxx-large';
  fontWeight:number=24;

  testClick(){
    console.log("Button Test Clicked")
  };
  
  fruits:{name:String,quantity:number}[]=[];

  ngOnInit(): void {
    this.fruits.push({name:'mango',quantity:10});
    this.fruits.push({name:'durain',quantity:10});
    this.fruits.push({name:'avocado',quantity:25})
  }
  // this is a fruit array and it is instantiated empty




}
