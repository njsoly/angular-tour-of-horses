import { Component, OnInit } from '@angular/core';

import { Horse } from '../horse'; // neigh
import { HorseService } from '../horse.service'; // takes the place of the former mock data



@Component({
  // these are metadata properties created by CLI 
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {
	
	selectedHorse: Horse;

	horses: Horse[];

	onSelect(horse: Horse): void {
		this.selectedHorse = horse;
	}

	constructor(private horseService: HorseService) { 
		
	}

	/** The "ngOnInit lifecycle hook" */
	ngOnInit() {
		this.getHorses();	
	}

	getHorses(): void {
		this.horseService.getHorses()
		// observable data
		.subscribe(horses => this.horses = horses)
		;
	}

}
