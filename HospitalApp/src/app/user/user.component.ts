import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  title = 'List of users';
  hospitals;
  constructor(private service: HospitalsService) {
    this.hospitals = service.getHospitals();
    // console.log(service.PrintResult());
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.service.PrintResult().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.error(err),
      () => console.log('done loading foods')
    );
  }
}
