import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsTableComponent } from './hogwarts-table.component';

describe('HogwartsTableComponent', () => {
  let component: HogwartsTableComponent;
  let fixture: ComponentFixture<HogwartsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HogwartsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
