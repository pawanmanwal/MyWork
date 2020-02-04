import { Injectable } from '@angular/core';
import {AppConfiguration} from './app-configuration';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfiguration {

  constructor(private http: HttpClient) {
    super();
  }

  load() {
    return this.http.get<AppConfiguration>('app.config.json')
      .toPromise()
      .then(data => {
        this.restAPIURL = data.restAPIURL;
      })
      .catch(() => {
        console.error('Could not load configuration');
      });
  }
}
