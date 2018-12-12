import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget-service/widget.service';
import { WidgetModel } from '../widget.model';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  widgetList: WidgetModel[] = [];

  constructor(private widgetSrv: WidgetService) { }

  ngOnInit() {
  }

  generateWidget() {
    const widget = this.widgetSrv.generageRandomObject();
    this.widgetList = [widget, ...this.widgetList];
  }

}
