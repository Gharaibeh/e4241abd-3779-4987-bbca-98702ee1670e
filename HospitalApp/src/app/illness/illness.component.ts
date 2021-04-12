import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.css'],
})
export class IllnessComponent implements OnInit {
  navLinks: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navLinks.push('./level');
  }
}
