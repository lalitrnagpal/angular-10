import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: '<app-server-two></app-server-two><app-server-two></app-server-two>',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
