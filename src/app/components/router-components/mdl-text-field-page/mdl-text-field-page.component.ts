// Imports from @Angular
import { Component } from '@angular/core';
// mdlTextField
import { MdlTextFieldComponent } from '../../mdl-text-field/mdl-text-field.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-text-field-page',
  template: require('./mdl-text-field-page.component.html'),
  directives: [MdlTextFieldComponent]
})
export class MdlTextFieldPageComponent {
  email: string = '';
  ngOnInit() {
    hljs.initHighlighting();
  }
}
