import { Fruit } from './shared/models/fruit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  private fruits = 'assets/mock-data/fruits-data.json';

  constructor(
    private http: HttpClient
  ) { }
  // 获取所有水果
  getAllFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.fruits);
  }
  // 通过名字来取水果
  getAllFruitsByName(name: string): Observable<Fruit[]> {
    // 使用map筛选了下名字符合的
    return this.http.get<Fruit[]>(this.fruits).pipe(map(furits => {
      // filter即筛选函数，遍历并取出符合条件的元素
      return furits.filter(f => f.name.indexOf(name) !== -1);
    }));
  }
  // 创建新的水果
  createNewFruit(fruit: Fruit) {
    return this.http.put(this.fruits, fruit);
  }
}
