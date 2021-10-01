import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './_models/device';


@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {

  readonly url: string= 'http://localhost:3080'

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/deviceread`);
  }

  getDevicesError(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/deviceerr`);
  }
}
