import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { userData } from './shared/userData.service'
import { deptData } from './shared/deptData.service'

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [userData, deptData],
  bootstrap: [AppComponent]
})
export class AppModule { }
