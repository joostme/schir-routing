import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfuegungComponent } from './verfuegung.component';

describe('VerfuegungComponent', () => {
  let component: VerfuegungComponent;
  let fixture: ComponentFixture<VerfuegungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfuegungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfuegungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
