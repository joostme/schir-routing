import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressatenComponent } from './adressaten.component';

describe('AdressatenComponent', () => {
  let component: AdressatenComponent;
  let fixture: ComponentFixture<AdressatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
