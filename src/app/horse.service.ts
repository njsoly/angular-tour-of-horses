import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Horse } from './horse';
import { HORSES } from './mock-horses';
import { MessageService } from './message.service';

@Injectable ({
  providedIn: 'root',
})

/**
 * This thing is going to provide an injectable service.
 */
export class HorseService {

  /** creation of a typical "service-in-service" scenario.
   * 
   * - you inject MessageService into HorseService,
   * - which itself is injected into the HorsesComponent.
   */
  constructor(private messageService: MessageService) { }

  /** Making the return type be an
   * OBSERVABLE satisfies the need to make
   * our service's data retrieval process
   * asynchronous.
   *
   * This is wicked important.
   */
  getHorses(): Observable<Horse[]> {
    // TODO: send the message _After_ fetching the horses.
    this.messageService.add('HorseService: fetched horses.');
    
    // this returns an Observable<Horse[]> 
    // that emits a SINGLE VALUE: the array of mock horses.
    return of(HORSES);
  }

  getHorse(id: number): Observable<Horse> {
    // TODO: send the message _after_ fetching the horse
    this.messageService.add(`HorseService: fetched horse id=${id}`);
    return of(HORSES.find(horse => horse.id === id));
  }

}
