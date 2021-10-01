import { Component } from '@angular/core';
import { DeviceServiceService } from './device-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private deviceService: DeviceServiceService){

  }

  title = 'aws-challenge';
  public isDisabled = false;
  public events: string[] = [];
  public opened: boolean = false;

  ngOnInit(){
    this.deviceService.getDevices().subscribe(devices => {
      console.log(devices)
    })
  }


}
