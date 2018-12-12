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

	horses: Horse[];

	selectedHorse: Horse;

	onSelect(horse: Horse): void {
		this.selectedHorse = horse;
	}

	constructor(private horseService: HorseService) { 
		// injecting the HorseService?
		
	}

	ngOnInit() {}

	getHorses(): void {
		this.horses = this.horseService.getHorses();
	}


	
}

