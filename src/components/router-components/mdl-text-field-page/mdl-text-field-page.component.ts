// Imports from Angular2
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// mdlTextField
import { MdlTextFieldComponent } from '../../mdl-text-field/mdl-text-field.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-text-field-page',
  template: require('./mdl-text-field-page.component.html'),
  directives: [MdlTextFieldComponent, FORM_DIRECTIVES]
})
export class MdlTextFieldPageComponent {
  email: string = '';
  ngOnInit() {
    hljs.initHighlighting();
  }
}
