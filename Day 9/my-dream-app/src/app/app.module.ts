import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { userData } from './shared/userData.service';
import { deptData } from './shared/deptData.service';
import { Dbconnect } from './shared/dbconnect.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeaderComponent } from './header/header.component';
import { LikeComponent } from './like/like.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    FavoriteComponent,
    HeaderComponent,
    LikeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [userData, deptData, Dbconnect],
  bootstrap: [AppComponent],
})
export class AppModule {}
