import { Component } from '@angular/core';
import { userData } from './shared/userData.service';
import { deptData } from './shared/deptData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor( private ud: userData, private dp: deptData) {
    this.userData = this.ud.loadData();
    this.deptData = this.dp.loadData();
  }

   ngOnInit(): void {}
  userData: string[];

  deptData: string[];

  shoppingCart = [];
  title = 'Manoj';
  active = true;
  callme() {
    console.log('Hello');
  }
}
