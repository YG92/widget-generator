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
    this.widgetSrv.widgetsChanged.subscribe((widgets: WidgetModel[]) => this.widgetList = widgets);
    this.widgetList = this.widgetSrv.getWidgets();
  }

  generateWidget(): void {
    this.widgetSrv.addWidget();
  }

}
