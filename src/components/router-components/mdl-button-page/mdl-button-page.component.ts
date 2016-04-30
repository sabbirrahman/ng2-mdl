// Imports from Angular2
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
// mdlButton
import { MdlButtonComponent } from '../../mdl-components/mdl-button/mdl-button.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-button-page-page',
  template: require('./mdl-button-page.component.html'),
  directives: [MdlButtonComponent, FORM_DIRECTIVES]
})
export class MdlButtonPageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
