import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  displayContent: boolean = true;
  buttonClicks: any = [];
  clickNumber: number = 0;

  clickCoordinates: {
    event:string,
    x:number, 
    y:number
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayContentStatus(event: PointerEvent){
    
    this.clickCoordinates = {
      event: "Click number " + (this.clickNumber + 1),
      x: event.clientX,
      y: event.clientY
    }

    this.buttonClicks.push(this.clickCoordinates);
    //console.log(this.buttonClicks);
    
    if(this.displayContent === true){
      this.displayContent = false;
    }else{
      this.displayContent = true
    }
    this.clickNumber = this.clickNumber + 1;
  }
}
