import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { TableAppComponent } from './table-app/table-app.component';
import { TableRowComponent } from './table-row/table-row.component';
import { DhtmlxComboComponent } from './dhtmlx-combo/dhtmlx-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TableAppComponent,
    TableRowComponent,    
    DhtmlxComboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
