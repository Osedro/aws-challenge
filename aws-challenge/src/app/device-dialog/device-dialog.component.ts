import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.leftButtonLabel != null){
        this.leftButtonLabel = data.leftButtonLabel;

      }

      if(data.dialogMsg != null){
        this.dialogMsg = data.dialogMsg;

      }

      if(data.rightButtonLabel != null){
        this.rightButtonLabel = data.rightButtonLabel;

      }
    }

  public dialogMsg = 'New Device';
  public leftButtonLabel = 'Cancel';
  public rightButtonLabel = 'Create';

  ngOnInit(): void {
  }

  public clickRightButton(){
    this.dialogRef.close(true);
  }

  public clickLeftButton(){
    this.dialogRef.close(false);
  }
}
