import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';
interface Hospital {
  id: string;
  name: string;
  location: string;
  waitingList: any;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  title = 'List of users';
  hospitals;
  hosiptalHTTP: any;
  constructor(private service: HospitalsService) {
    this.hospitals = service.getHospitals();

    // console.log(service.PrintResult());
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.service.PrintResult().subscribe(
      (data: any) => {
        console.log(data);
        // this.hosiptalHTTP = data;
        console.log(data['body']['page']);
        //  console.log();
        for (const element of data['body']['_embedded']['hospitals']) {
          console.log(element.name);
        }
        /* const ll = JSON.stringify(data);
        for (const element of ll) {
          console.log(element);
        }*/
      },
      (err: any) => console.error(err),
      () => console.log('done loading data')
    );
  }
}
// var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);
