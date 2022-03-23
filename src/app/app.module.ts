import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { TablegymComponent } from './tablegym/tablegym.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    TablegymComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
