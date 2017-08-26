import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompdosComponent } from './compdos.component';

describe('CompdosComponent', () => {
  let component: CompdosComponent;
  let fixture: ComponentFixture<CompdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
