import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from '../_models/device';
import { DialogComponent } from '../dialog/dialog.component';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import { DeviceServiceService } from '../device-service.service';

export var DEVICE_DATA = [
  {name:'MacBook', category: 'Notebook', color:'red', partNumber:'123456789', id: 1},
  {name:'ZenPhone', category: 'Notebook', color:'red', partNumber:'123456789', id: 1},
  {name:'Trabalho', category: 'Notebook', color:'red', partNumber:'123456789', id: 1},
  {name:'Outros', category: 'Notebook', color:'red', partNumber:'123456789', id: 1},
];


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {

  public displayedColumns2: string[] = ['id','name', 'category', 'color', 'partNumber', 'actions'];
  public dataSource: Device[] = [];

  constructor(private dialog: MatDialog, private deviceService: DeviceServiceService) { }

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
    this.dialog.open(DeviceDialogComponent,{disableClose:true,
      data: {dialogMsg: 'New Device', leftButtonLabel: 'Cancel', rightButtonLabel: 'Create'}}).afterClosed().subscribe(
      resp => {
        if(resp == true){
          console.log("Device criado com sucesso!");
        }else{
          console.log("Criação do device cancelada!");
        }
      }
    )
  }

  public updateDevices(){
    console.log("Updanting devices...")
    this.deviceService.getDevices().subscribe(devices => {

      for(let i = 0 ; i < devices.length ; i++){
        var dev = new Device()

        dev.name = devices[i].name
        dev.category = devices[i].category
        dev.color = devices[i].color
        dev.partNumber = devices[i].partNumber
        dev.id = devices[i].id
        this.dataSource.push(dev)
      }
    })

  }

}


