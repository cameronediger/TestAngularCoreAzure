import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor() { }

  async loadServerSettings() {
    var serverSettings: { [key: string]: string };

    //serverSettings = await getsettings();

    //return Promise.resolve();
  }
}
