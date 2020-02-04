import { Component } from '@angular/core';
import {AppConfiguration} from './app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-client';
  restAPIURL:string;

  constructor(private appConfig: AppConfiguration) {
    this.restAPIURL = appConfig.restAPIURL;

    console.log(appConfig.restAPIURL);
  }
}
