import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-environment-header',
  templateUrl: './environment-header.component.html',
  styleUrls: ['./environment-header.component.css']
})
export class EnvironmentHeaderComponent implements OnInit {
  environment: string;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.environment = this.commonService.environment;
  }

}
