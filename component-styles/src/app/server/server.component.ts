import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3 {
      color: white;
      background-color: green
    }
    h4 {
      color: white;
      background-color: blue
    }
  `]
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
