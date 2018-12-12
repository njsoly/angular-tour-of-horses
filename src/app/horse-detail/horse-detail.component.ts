import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../horse';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HorseService }  from '../horse.service';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
})

/**
 * This is the detached "Detail" component, which handles the display of 
 * the details of one specific Horse instance.
 * 
 * It was taken from HorsesComponent (horses.component.html).
 */
export class HorseDetailComponent implements OnInit {
  @Input() horse: Horse;

  constructor() { }

  ngOnInit() {
  }

}
