import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowingProgramsComponent } from './rowing-programs.component';

describe('RowingProgramsComponent', () => {
  let component: RowingProgramsComponent;
  let fixture: ComponentFixture<RowingProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowingProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowingProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
