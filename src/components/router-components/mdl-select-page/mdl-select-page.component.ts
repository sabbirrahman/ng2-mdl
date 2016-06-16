// Imports from Angular2
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// mdlButton
import { MdlSelectComponent } from '../../mdl-select/mdl-select.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-select-page-page',
  template: require('./mdl-select-page.component.html'),
  directives: [MdlSelectComponent, FORM_DIRECTIVES]
})
export class MdlSelectPageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
