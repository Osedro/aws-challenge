import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDialogDelComponent } from './category-dialog-del.component';

describe('CategoryDialogDelComponent', () => {
  let component: CategoryDialogDelComponent;
  let fixture: ComponentFixture<CategoryDialogDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDialogDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDialogDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
