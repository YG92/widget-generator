import { Component, Input, OnInit } from '@angular/core';
import { WidgetModel } from '../widget.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() widget: WidgetModel;
  inFavorites = false;

  constructor() { }

  ngOnInit() {
  }

  get followersLeft(): number {
    const followers = this.widget.followers;
    if (followers.number === 0) return 0;
    return followers.number > 5 ? followers.number - 5 : null;
  }

}
