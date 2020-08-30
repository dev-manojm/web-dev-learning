import { Component, OnInit } from '@angular/core';
import { userData } from '../shared/userData.service';
import { deptData } from '../shared/deptData.service';
@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
})
export class MycompComponent implements OnInit {
  constructor(private ud: userData, private dp: deptData) {
    this.userData = this.ud.loadData();
    this.deptData = this.dp.loadData();
  }

  ngOnInit(): void {}
  userData;
  deptData;
}
