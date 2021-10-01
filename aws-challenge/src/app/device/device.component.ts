import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from '../_models/device';
import { DialogComponent } from '../dialog/dialog.component';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import { DeviceServiceService } from '../device-service.service';
import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public displayedColumns2: string[] = ['id','name', 'category', 'color', 'partNumber', 'actions'];
  public dataSource: Device[] = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private dialog: MatDialog,
    private deviceService: DeviceServiceService
    ) {

    }

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
          this.dataSource = []
          this.deviceService.delDevice(device.id).subscribe(devices => {
            /*
            for(let i = 0 ; i < devices.length ; i++){
              var dev = new Device()

              dev.name = devices[i].name
              dev.category = devices[i].category
              dev.color = devices[i].color
              dev.partNumber = devices[i].partNumber
              dev.id = devices[i].id
              this.dataSource.push(dev)
            }
            this.table.renderRows();
            */
            this.updateDevices()
          })
          console.log("Device apagado com sucesso!");

        }else{
          console.log("Device não apagada");
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
    this.dataSource = []
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
      this.table.renderRows();
    })


  }

}


