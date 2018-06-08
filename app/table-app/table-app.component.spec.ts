import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAppComponent } from './table-app.component';
import { AdventureTimeService } from '../adventure-time.service';


describe('TableAppComponent', () => {
  let component: TableAppComponent;
  let fixture: ComponentFixture<TableAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
