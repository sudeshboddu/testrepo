import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhtmlxComboComponent } from './dhtmlx-combo.component';

describe('DhtmlxComboComponent', () => {
  let component: DhtmlxComboComponent;
  let fixture: ComponentFixture<DhtmlxComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhtmlxComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhtmlxComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
