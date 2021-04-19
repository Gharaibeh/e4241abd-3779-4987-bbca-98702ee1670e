import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HospitalsService } from './hospitals.service';
import { HttpClientModule } from '@angular/common/http';
import { IllnessComponent } from './illness/illness.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LevelComponent } from './illness/level/level.component';
export const routerConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'illness',
    component: IllnessComponent,
    children: [
      {
        path: '',
        redirectTo: 'illness',
        pathMatch: 'full',
      },
      {
        path: 'level',
        component: LevelComponent,
      },
    ],
  },
  { path: 'hospital', component: UserComponent },
  { path: '*', component: HomeComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    IllnessComponent,
    HospitalComponent,
    MapComponent,
    PageNotFoundComponent,
    LevelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [HospitalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
