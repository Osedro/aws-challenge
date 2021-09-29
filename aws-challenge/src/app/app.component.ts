import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-challenge';
  public isDisabled = false;
  public events: string[] = [];
  public opened: boolean = false;
}
