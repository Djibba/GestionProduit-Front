import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCategoriesComponent } from './lister-categories.component';

describe('ListerCategoriesComponent', () => {
  let component: ListerCategoriesComponent;
  let fixture: ComponentFixture<ListerCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerCategoriesComponent]
    });
    fixture = TestBed.createComponent(ListerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
