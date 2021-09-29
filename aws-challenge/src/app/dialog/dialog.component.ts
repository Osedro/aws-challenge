import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
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

  public dialogMsg = 'Deseja continuar com essa ação?';
  public leftButtonLabel = 'Cancelar';
  public rightButtonLabel = 'Ok';

  ngOnInit(): void {
  }

  public clickRightButton(){
    this.dialogRef.close(true);
  }

  public clickLeftButton(){
    this.dialogRef.close(false);
  }

}
