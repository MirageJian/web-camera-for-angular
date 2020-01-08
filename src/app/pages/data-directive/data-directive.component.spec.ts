import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDirectiveComponent } from './data-directive.component';

describe('DataDirectiveComponent', () => {
  let component: DataDirectiveComponent;
  let fixture: ComponentFixture<DataDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
