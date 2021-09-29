import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from '../_models/device';
import { DialogComponent } from '../dialog/dialog.component';

export const DEVICE_DATA = [
  {name:'MacBook', category: 'Notebook', color:'red', partNumber:'123456789'},
  {name:'ZenPhone', category: 'Notebook', color:'red', partNumber:'123456789'},
  {name:'Trabalho', category: 'Notebook', color:'red', partNumber:'123456789'},
  {name:'Outros', category: 'Notebook', color:'red', partNumber:'123456789'},
];


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {

  public displayedColumns2: string[] = ['id','name', 'category', 'color', 'partNumber', 'actions'];
  public dataSource: Device[] = DEVICE_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editDevice(device: Device){
    console.log("Edit device clicked")
  }

  public deleteDevice(device: Device){
    this.dialog.open(DialogComponent,{disableClose:true,
      data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp == true){
          console.log("Categoria apagada com sucesso!");
        }else{
          console.log("Categoria não apagada");
        }
      }
    )
  }

  public createNewDevice(){
    console.log("Create device clicked")
  }

}


