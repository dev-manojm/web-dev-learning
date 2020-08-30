import { Component, OnInit } from '@angular/core';
import { Dbconnect } from '../shared/dbconnect.service';
import { NgForm }from '@angular/forms'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private fn: Dbconnect) {
    this.fn.addusertoDB();
  }

  ngOnInit(): void {}

  callme(nf:NgForm) {
    console.log('Its called', nf.value);
    this.fn.addusertoDB();
  }
}
