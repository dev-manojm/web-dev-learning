import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { userData } from './shared/userData.service';
import { deptData } from './shared/deptData.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, MycompComponent, FavoriteComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [userData, deptData],
  bootstrap: [AppComponent],
})
export class AppModule {}
