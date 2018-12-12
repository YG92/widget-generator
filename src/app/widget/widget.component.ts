import { Component, Input, OnInit } from '@angular/core';
import { WidgetModel } from '../widget.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() widget: WidgetModel;

  constructor() { }

  ngOnInit() {
  }

}
