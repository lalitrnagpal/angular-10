import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AppServerTwoComponent } from './server-two/server-two.component';
import { ServerThreeComponent } from './server-three/server-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AppServerTwoComponent,
    ServerThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
