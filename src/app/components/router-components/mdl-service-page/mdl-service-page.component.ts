// Imports from @angular
import { Component } from '@angular/core';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-service-page',
  template: require('./mdl-service-page.component.html')
})
export class MdlServicePageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
