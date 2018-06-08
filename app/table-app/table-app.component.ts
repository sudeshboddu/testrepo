import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdventureTimeService } from '../adventure-time.service';

@Component({
  selector: 'app-table-app',
  templateUrl: './table-app.component.html',
  styleUrls: ['./table-app.component.css'],

})
export class TableAppComponent implements OnInit {    

characters;
columns: string[];
@Output()
selectedRow:any =  new EventEmitter();

seletedRowList = [];
  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }

  onRowSelected(row){
      if(this.seletedRowList.indexOf(row) > -1){
          return;
      }else{
        this.seletedRowList.push(row);
    }
  } 

  onAddDiscountClick(){
      if(this.seletedRowList.length > 0){
    this.selectedRow.emit(this.seletedRowList);
    }
  }

}
