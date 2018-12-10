import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../horse';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
})
export class HorseDetailComponent implements OnInit {
  @Input() horse: Horse;

  constructor() { }

  ngOnInit() {
  }

}
