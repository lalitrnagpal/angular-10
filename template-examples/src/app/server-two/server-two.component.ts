import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-two',
  template: `  <p>Server Two Works</p>
                  <app-server-three></app-server-three>
            `,
  styleUrls: ['./server-two.component.css']
})
export class AppServerTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
