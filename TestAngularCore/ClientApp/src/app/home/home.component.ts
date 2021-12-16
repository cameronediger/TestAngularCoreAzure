import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  location: string;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.location = this.commonService.location;
  }
}
