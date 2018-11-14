import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWayComponent } from './angular-way.component';

describe('AngularWayComponent', () => {
  let component: AngularWayComponent;
  let fixture: ComponentFixture<AngularWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
