import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  userName: string = "";
    
  constructor() {
  }
  
  ngOnInit(): void {    
  }

  onResetUsername(event: Event){
    this.userName = '';
  }
}
