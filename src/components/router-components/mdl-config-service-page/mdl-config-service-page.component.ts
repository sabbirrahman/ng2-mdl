// Imports from Angular2
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-config-service-page',
  template: require('./mdl-config-service-page.component.html')
})
export class MdlConfigServicePageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
