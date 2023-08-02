import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataEntryComponent } from './data-entry/data-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    DataDisplayComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,FruitsComponent]
})
export class AppModule { }
