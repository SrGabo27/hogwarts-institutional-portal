import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewStudentsComponent } from './list-new-students.component';

describe('ListNewStudentsComponent', () => {
  let component: ListNewStudentsComponent;
  let fixture: ComponentFixture<ListNewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNewStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
