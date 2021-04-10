import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

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
    RouterModule.forRoot(routerConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
