import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse'; // neigh
import { HORSES } from '../mock-horses';
import { HorseService } from '../horse.service';



@Component({
  // these are metadata properties created by CLI 
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

	horses: Horse[];

	selectedHorse: Horse;

	onSelect(horse: Horse): void {
		this.selectedHorse = horse;
	}

	constructor() { 
	
	}

	ngOnInit() {
	}


	
}

