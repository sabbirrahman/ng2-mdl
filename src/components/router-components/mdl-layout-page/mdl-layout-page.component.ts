// Imports from Angular2
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
// mdlLayout
import { MdlLayoutComponent } from '../../mdl-components/mdl-layout/mdl-layout.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-layout-page',
  template: require('./mdl-layout-page.component.html'),
  directives: [MdlLayoutComponent, FORM_DIRECTIVES]
})
export class MdlLayoutPageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
