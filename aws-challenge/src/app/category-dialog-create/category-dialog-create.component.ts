import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryServiceService } from '../category-service.service';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import { DeviceServiceService } from '../device-service.service';

@Component({
  selector: 'app-category-dialog-create',
  templateUrl: './category-dialog-create.component.html',
  styleUrls: ['./category-dialog-create.component.css']
})
export class CategoryDialogCreateComponent implements OnInit {

  public dialogMsg = 'New Category';
  public leftButtonLabel = 'Cancel';
  public rightButtonLabel = 'Create';
  public createCategoryForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private deviceService: DeviceServiceService,
    private categoryService: CategoryServiceService) {
      if(data.leftButtonLabel != null){
        this.leftButtonLabel = data.leftButtonLabel;

      }

      if(data.dialogMsg != null){
        this.dialogMsg = data.dialogMsg;

      }

      if(data.rightButtonLabel != null){
        this.rightButtonLabel = data.rightButtonLabel;

      }


      this.createCategoryForm = this.formBuilder.group({
        name: '',
      })
    }

  ngOnInit(): void {
  }
  // Criar novo device
  public clickRightButton(){
    if(this.createCategoryForm.getRawValue().name != ''){
      this.categoryService.createCategory(this.createCategoryForm.getRawValue().name).subscribe(() => {
        this.dialogRef.close(true);
      })
    }
  }

  // Cancelar
  public clickLeftButton(){
    this.dialogRef.close(false);
  }
}
