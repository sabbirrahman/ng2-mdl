// Imports from @angular
import { Component } from '@angular/core';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
