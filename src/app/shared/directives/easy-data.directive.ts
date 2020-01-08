import { Fruit } from './../models/fruit';
import { AppService } from './../../app.service';
import { Directive, OnInit, Input } from '@angular/core';

export enum SourceEnum {
  Fruit
}

@Directive({
  exportAs: 'appEasyData',
  selector: 'appEasyData, [appEasyData]'
})
export class EasyDataDirective implements OnInit {
  @Input() source: SourceEnum;
  data: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    switch (this.source) {
      case SourceEnum.Fruit: {
        // Do Something
        this.appService.getAllFruits().subscribe((res: Fruit[]) => this.data = res);
      }
    }
  }
}

