import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfahrenComponent } from './verfahren.component';

describe('VerfahrenComponent', () => {
  let component: VerfahrenComponent;
  let fixture: ComponentFixture<VerfahrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfahrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfahrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
