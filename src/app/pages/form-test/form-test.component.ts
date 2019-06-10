import { Fruit } from './../../shared/models/fruit';
import { Component, OnInit, Injector } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  allFruits: Fruit[];
  newFruit: Fruit;
  snackBar: MatSnackBar;

  constructor(
    private _appService: AppService,
    private injector: Injector
  ) {
    this.snackBar = injector.get(MatSnackBar);
   }

  ngOnInit() {
    this.newFruit = {id: null, name: null, color: null, isSuger: null};
  }
  sugerChange() {

  }
  // 创建水果。。
  create(newFruit: Fruit) {
    console.log(newFruit);
    this._appService.getAllFruits().subscribe(result => {
      this.allFruits = result;
      this.allFruits.push(newFruit);
    });
    // json序列化
    // this._appService.createNewFruit(newFruit).subscribe(() => {
    //     this.snackBar.open('提交成功', '关闭', {duration: 2000});
    //   }
    // );
  }
}
