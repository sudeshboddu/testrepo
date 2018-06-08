import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  testTable= [];
  constructor() { }

  ngOnInit() {
  }

  slectedRow(selectedRow){
    this.testTable = selectedRow;
  } 

  deleteOnImageClick(item){
    let index = this.testTable.indexOf(item);
    if(index> -1){
      this.testTable.splice(index, 1);
    }
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  deleteFieldValue(index) {
    console.log("deleteFieldValue");
    this.fieldArray.splice(index, 1);
  }
}
