import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Selector as element
  // selector: '[app-servers]', //Selector as attribute
  // selector: '.app-servers', //Selector as class
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(event: Event){
    console.log(event);
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
