import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HospitalsService } from './hospitals.service';
import { HttpClientModule } from '@angular/common/http';

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
@NgModule({
  declarations: [AppComponent, UserComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [HospitalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
