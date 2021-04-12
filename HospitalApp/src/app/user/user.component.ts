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
  hosiptalHTTP: Hospital[];

  constructor(private service: HospitalsService) {
    this.hospitals = service.getHospitals();

    this.hosiptalHTTP = [];
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.service.PrintResult().subscribe(
      (data: any) => {
        console.log('1-------------');
        console.log(data);
        // this.hosiptalHTTP = data;
        console.log(data['body']['page']);
        console.log(data['body']['_links']['next']);
        //  console.log();
        for (const element of data['body']['_embedded']['hospitals']) {
          this.hosiptalHTTP.push({
            name: element.name,
            location: element.location['lat'] + element.location['lng'],
            id: element.id,
            waitingList: element.waitingList,
          });
          console.log(element['name']);
          // this.hosiptalHTTP.push(element['name']);
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
