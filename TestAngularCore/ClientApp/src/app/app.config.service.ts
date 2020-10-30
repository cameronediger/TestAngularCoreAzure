import { Injectable } from '@angular/core';
import { CommonService } from './services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(private commonService: CommonService) { }

  async loadServerSettings() {
    var serverSettings: { [key: string]: string };

    this.commonService.appRootUrl = document.location.pathname;

    serverSettings = await this.commonService.getSettings().toPromise();
    this.commonService.environment = serverSettings['environment'];
    this.commonService.location = serverSettings['location'];

    return Promise.resolve();
  }
}
