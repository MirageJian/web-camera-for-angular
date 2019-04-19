import { Fruit } from './../../shared/models/fruit';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {
  // 表格头
  displayedColumns: string[] = ['id', 'name', 'color'];
  // 用于发送关键字的Subject
  searchTerm: Subject<string>;
  // 显示结果的Observable
  searchResult: Observable<Fruit[]>;

  constructor(
    // 注入服务
    private _appService: AppService,
  ) { }

  ngOnInit() {
    // new对象
    this.searchTerm = new Subject();
    // 添加管道，使用操作符对数据进行处理，最后订阅
    this.searchResult = this.searchTerm.pipe(
      debounceTime(500),
      startWith(''),
      distinctUntilChanged(),
      switchMap(keyword => this._appService.getAllFruitsByName(keyword))
    );
  }

  search(keyword: string) {
    // keyword是搜索的关键字
    this.searchTerm.next(keyword);
  }
}
