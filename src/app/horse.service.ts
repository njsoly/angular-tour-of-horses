import { Injectable } from '@angular/core';
import { Horse } from './horse';
import {HORSES } from './mock-horses';

@Injectable ({
  providedIn: 'root',
})

/**
 * This thing is going to provide an injectable service.
 */
export class HorseService {

  constructor() { }

  getHORSES(): Horse[] {
    return HORSES;
  }

}
