import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryServiceService } from '../category-service.service';
import { DeviceServiceService } from '../device-service.service';
import { Device } from '../_models/device';


@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  public actionName = 'Create'
  public createDeviceForm: FormGroup
  public categories: String[] = []

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

      this.createDeviceForm = this.formBuilder.group({
        name: '',
        category: '',
        color: '',
        partNumber: ''
      })
    }

  public dialogMsg = 'New Device';
  public leftButtonLabel = 'Cancel';
  public rightButtonLabel = 'Create';

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      for(let i = 0 ; i < categories.length ; i++){
        this.categories.push(categories[i].name)
      }
    })
  }

  // Criar novo device
  public clickRightButton(){
    let dev = new Device
    dev.name = this.createDeviceForm.getRawValue().name
    dev.color = this.createDeviceForm.getRawValue().color
    dev.partNumber = this.createDeviceForm.getRawValue().partNumber
    dev.category = this.createDeviceForm.getRawValue().category

    console.log(this.createDeviceForm.getRawValue())


    this.deviceService.createDevice(dev).subscribe(devices => {
      this.dialogRef.close(true);
    })
  }

  // Cancelar
  public clickLeftButton(){
    this.dialogRef.close(false);
  }

  public keyPressAlphaNumericWithCharacters(event: { keyCode: number; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);
    // Allow numbers, alpahbets, space, underscore
    if (/[a-zA-Z-_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
