import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  appRootUrl = '';
  environment = 'Development';

  constructor(private http: HttpClient) { }

  getSettings() {
    const apiUrl = `${this.appRootUrl}api/configuration/settings`;
    return this.http.get<{ [key: string]: string }>(apiUrl);
  }
}
