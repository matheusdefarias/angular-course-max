import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Selector as element
  // selector: '[app-servers]', //Selector as attribute
  // selector: '.app-servers', //Selector as class
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
