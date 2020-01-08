import { Component, OnInit } from '@angular/core';
import { SourceEnum } from '@shared/directives/easy-data.directive';

@Component({
  selector: 'app-data-directive',
  templateUrl: './data-directive.component.html',
  styleUrls: ['./data-directive.component.css']
})
export class DataDirectiveComponent implements OnInit {
  SourceEnum = SourceEnum;
  constructor() { }

  ngOnInit() {
  }

}
