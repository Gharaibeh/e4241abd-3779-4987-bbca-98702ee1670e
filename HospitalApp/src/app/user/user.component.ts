import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  public photoUrl: string;

  @Input()
  public name: string;

  public showInitials = false;
  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  title = 'List of users';
  hospitals;
  hosiptalHTTP: Hospital[];

  constructor(private service: HospitalsService) {
    this.hospitals = service.getHospitals();

    this.hosiptalHTTP = [];
    this.initials = 's';
    this.name = 'aas';
    this.circleColor = '';
    this.photoUrl = '';
  }

  ngOnInit() {
    this.getFoods();
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();

      const randomIndex = Math.floor(
        Math.random() * Math.floor(this.colors.length)
      );
      this.circleColor = this.colors[randomIndex];
      this.initials = 'A';
    }
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
          console.log(this.showInitials);
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

  getShortName() {
    return 'S';
  }

  createInititals(): void {
    let initials = '';
    console.log(this.name);
    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }
}
// var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);
