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

  private createArray(length: number, key: string): string[] {
    return Array.from({ length }, () => this.getRandomValue(key))
  }

  generateRandomObject(): WidgetModel {
    const followersNumber = this.getRandInt(1000);
    return {
      images: this.createArray(3, 'images'),
      title: this.getRandomValue('titles'),
      author: this.getRandomValue('names'),
      followers: {
        number: followersNumber,
        images: this.createArray(followersNumber > 5 ? 5 : followersNumber, 'images')
      }
    }
  }
}
