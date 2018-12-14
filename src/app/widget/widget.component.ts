import { Component, Input, OnInit } from '@angular/core';
import { WidgetService } from '../widget-service/widget.service';
import { WidgetModel } from '../widget.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() widget: WidgetModel;

  constructor(private widgetSrv: WidgetService) { }

  ngOnInit() {
  }

  get followersLeft(): number {
    const followersNum = this.widget.followers.number;
    return followersNum === 0 || followersNum > 5 ? followersNum : null;
  }

  updateWidgetStatus(): void {
    this.widget.inFavorites = true;
    this.widgetSrv.updateWidgetStatus(this.widget);
  }

}
