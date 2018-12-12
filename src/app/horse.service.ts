import { Injectable } from '@angular/core';
import { Horse } from './horse';
import { HORSES } from './mock-horses';
import { Observable, of } from 'rxjs';

@Injectable ({
  providedIn: 'root',
})

/**
 * This thing is going to provide an injectable service.
 */
export class HorseService {

  constructor() { }

  /** Making the return type be an
   * OBSERVABLE satisfies the need to make
   * our service's data retrieval process
   * asynchronous.
   *
   * This is wicked important.
   */
  getHorses(): Observable<Horse[]> {
    return of(HORSES);
  }

}
