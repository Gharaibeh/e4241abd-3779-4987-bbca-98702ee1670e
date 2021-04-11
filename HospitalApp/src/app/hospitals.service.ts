import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

interface Hospital {
  id: string;
  name: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class HospitalsService {
  apiURL = 'http://dmmw-api.australiaeast.cloudapp.azure.com:8080';

  constructor(private httpClient: HttpClient) {}

  getHospitals() {
    return ['RPA', 'Concord', 'Northen'];
  }

  PrintResult() {
    /*if(apiURL){
      return this.httpClient.get<Hospital[]>(this.apiURL, { observe: 'response' }).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.httpClient.get<Hospital[]>(`${this.apiURL}/hospitals`,
    { observe: 'response' }).pipe(tap(res => {
      this.retrieve_pagination_links(res);
    }));*/
    // return this.httpClient.get<Hospital[]>(`${this.apiURL}/hospitals`);

    /*return this.httpClient
      .post(url, JSON.stringify(Hospital), { headers: headers })
      .pipe(map((res: Response) => res.text()))
      .subscribe((data) => {
        console.log(data);
      });*/

    return this.httpClient.get(`${this.apiURL}/hospitals?limit=10&page=0`, {
      observe: 'response',
    });
  }
}
