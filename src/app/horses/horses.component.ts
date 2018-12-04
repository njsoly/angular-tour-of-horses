import { Component, OnInit } from '@angular/core';

@Component({
  // these are metadata properties created by CLI 
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

	constructor() { 
	
	}

	ngOnInit() {
	}

	hero = "Windstorm";
}
