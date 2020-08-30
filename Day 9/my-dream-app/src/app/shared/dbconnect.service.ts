import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class Dbconnect {
  addusertoDB(userData: any) {
    console.log('user is added', userData);
    return this.http
      .post('https://manojpro-2a81a.firebaseio.com/UserData.json', userData)
      .subscribe((udata) => {
        console.log(udata);
      });
  }
  constructor(private http: HttpClient) {}
}
