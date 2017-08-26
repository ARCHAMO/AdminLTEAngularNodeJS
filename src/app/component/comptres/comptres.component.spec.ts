import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptresComponent } from './comptres.component';

describe('ComptresComponent', () => {
  let component: ComptresComponent;
  let fixture: ComponentFixture<ComptresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
