import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompunoComponent } from './compuno.component';

describe('CompunoComponent', () => {
  let component: CompunoComponent;
  let fixture: ComponentFixture<CompunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
