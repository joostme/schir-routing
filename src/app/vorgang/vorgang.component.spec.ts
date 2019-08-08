import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VorgangComponent } from './vorgang.component';

describe('VorgangComponent', () => {
  let component: VorgangComponent;
  let fixture: ComponentFixture<VorgangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VorgangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VorgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
