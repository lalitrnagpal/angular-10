import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'Offline';
  allowNewServer = false;
  serverName = 'default-server-name';
  serverClass = 'default-class';

  constructor() { 
    setTimeout(() =>  { this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return this.serverStatus + " status from method.";
  }

  onCreateServer() {
    this.serverStatus = "Server was created!";
  }

  onInputUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>(event.target)).value;
    console.log((<HTMLInputElement>(event.target)).value);
  }

}
