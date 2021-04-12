import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HospitalApp';
  constructor(private router: Router) {}

  btnClick(): void {
    console.log('button clicked');
    this.router.navigateByUrl('/user');
  }
}
