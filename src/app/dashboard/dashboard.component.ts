/** https://angular.io/tutorial/toh-pt5#add-a-dashboard-view */

import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse';
import { HorseService } from '../horse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  horses: Horse[] = [];

  constructor(private horseService: HorseService) { }

  ngOnInit() {
    this.getHorses();
  }

  getHorses(): void {
    this.horseService.getHorses()
      .subscribe(horses => this.horses = horses.slice(1, 5));
  }
}