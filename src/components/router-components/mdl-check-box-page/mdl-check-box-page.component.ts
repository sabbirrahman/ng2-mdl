// Imports from Angular2
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// mdlCheckBox
import { MdlCheckBoxComponent } from '../../mdl-check-box/mdl-check-box.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-check-box-page',
  template: require('./mdl-check-box-page.component.html'),
  directives: [MdlCheckBoxComponent, FORM_DIRECTIVES]
})
export class MdlCheckBoxPageComponent {
  ready: boolean;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
