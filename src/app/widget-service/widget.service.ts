import { Injectable } from '@angular/core';
import { randomData } from '../fixture';
import { WidgetModel } from '../widget.model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  private getRandInt(max) {
    return Math.floor(Math.random() * max);
  }

  private getRandomValue(key) {
    const max = randomData[key].length - 1;
    const index = this.getRandInt(max);
    return randomData[key][index];
  }

  generageRandomObject(): WidgetModel {
    return {
      images: Array.from({ length: 3 }, () => this.getRandomValue('images')),
      title: this.getRandomValue('titles'),
      author: this.getRandomValue('names'),
      followerImages: Array.from({ length: this.getRandInt(5) + 1 }, () => this.getRandomValue('images'))
    }
  }
}
