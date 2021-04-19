import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.css'],
})
export class IllnessComponent implements OnInit {
  navLinks: string[] = [];
  config: any;

  collection = { count: 60, data: [] };

  constructor(private router: Router) {
    /* for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        text: 'Collection value' + (i + 1),
      });
    }
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count,
    };*/
  }

  ngOnInit(): void {
    this.navLinks.push('./level');
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
