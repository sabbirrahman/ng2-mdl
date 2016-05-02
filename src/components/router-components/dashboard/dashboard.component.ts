// Import from Angular2
import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.html'),
  directives: [RouterLink]
})
export class DashboardComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
