import {Component, EventEmitter, Injector, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sub-toolbar',
  templateUrl: './sub-toolbar.component.html',
  styleUrls: ['./sub-toolbar.component.css']
})
export class SubToolbarComponent implements OnInit, OnChanges, OnDestroy {
  // 搜索的提示
  @Input() searchTip: string;
  // 当点击搜索，或回车操作会发出时间
  @Output() searchStart = new EventEmitter<string>();
  // 是否正在搜索
  @Input() isSearching = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    if (!this.searchTip) {
      this.searchTip = '搜索';
    }
  }

  enterSearch(searchContent: string) {
    this.searchStart.emit(searchContent);
  }

  inputSearch(searchContent: string) {
    this.searchStart.emit(searchContent);
  }

  ngOnDestroy(): void {
  }
}
