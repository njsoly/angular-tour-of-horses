import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse'; // neigh

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

	horse: Horse = {
		id: 1,
		name: 'Bojack'
	};

	
}
