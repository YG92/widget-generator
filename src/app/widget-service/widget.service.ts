import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { randomData } from '../fixture';
import { WidgetModel } from '../widget.model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  widgetsChanged = new Subject<WidgetModel[]>();
  widgets: WidgetModel[] = this.getWidgets();

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

  private generateRandomWidget(): WidgetModel {
    const followersNumber = this.getRandInt(1000);
    return {
      id: this.widgets.length,
      images: this.createArray(3, 'images'),
      title: this.getRandomValue('titles'),
      author: this.getRandomValue('names'),
      followers: {
        number: followersNumber,
        images: this.createArray(followersNumber > 5 ? 5 : followersNumber, 'images')
      },
      inFavorites: false
    }
  }

  getWidgets(): WidgetModel[] {
    return JSON.parse(localStorage.getItem('widgets')) || [];
  }

  private setWidgets(): void {
    localStorage.setItem('widgets', JSON.stringify(this.widgets));
  }

  private updateWidgets(): void {
    this.setWidgets();
    this.widgetsChanged.next(this.widgets);
  }

  addWidget(): void {
    const widget = this.generateRandomWidget();
    this.widgets = [...this.widgets, widget];
    this.updateWidgets();
  }

  updateWidgetStatus(widget): void {
    this.widgets = this.widgets.map(i => i.id === widget.id ? widget : i);
    this.updateWidgets();
  }
}
