import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDialogCreateComponent } from './category-dialog-create.component';

describe('CategoryDialogCreateComponent', () => {
  let component: CategoryDialogCreateComponent;
  let fixture: ComponentFixture<CategoryDialogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDialogCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
