import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTestComponent } from './camera-test.component';

describe('CameraTestComponent', () => {
  let component: CameraTestComponent;
  let fixture: ComponentFixture<CameraTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
