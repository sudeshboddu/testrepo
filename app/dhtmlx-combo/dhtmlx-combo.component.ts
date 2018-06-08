import { Component, OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { comboData } from '../../data';
import { Observable, Subject } from 'rxjs';
import { AdventureTimeService } from '../adventure-time.service';




declare var dhtmlXCombo: any;
//declare var dhtmlXComboFromSelect: any;

@Component({
  selector: 'app-dhtmlx-combo',
  templateUrl: './dhtmlx-combo.component.html',
  styleUrls: ['./dhtmlx-combo.component.css']
})

export class DhtmlxComboComponent implements OnInit, AfterContentInit {
  myCombo : any;
  seletedRowList = [];

  constructor(private atService: AdventureTimeService ) { }
  characters;
  columns: string[];
  @Output()
  selectedRow:any =  new EventEmitter();

  ngOnInit() {
    this.columns = this.atService.getColumns();
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
    
  }

  ngAfterContentInit() {
      //var myCombo2 ;
      this.myCombo = new dhtmlXCombo("combo_zone", "combo", 230, "checkbox",);
      this.myCombo.load(comboData);

      this.myCombo.enableFilteringMode(true);
      this.myCombo.attachEvent("onChange", function(value, text){
				console.log("onChange event, value: "+value+", text: "+text);
			});
      this.myCombo.attachEvent("onSelectionChange", function(){
				console.log("onSelectionChange event");
			});

  }

  addDiscount(){
    
    // console.log(this.myCombo.getChecked());
    var selection = this.myCombo.getChecked();
    this.seletedRowList = selection;
    this.onRowSelected();

  }
  onRowSelected(){
    this.selectedRow.emit(this.seletedRowList);
  }

  onRemoveAll(){ debugger;
    //this.seletedRowList = [];
    this.selectedRow.emit([]);


  }

}
