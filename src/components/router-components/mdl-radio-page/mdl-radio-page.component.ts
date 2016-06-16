// Imports from Angular2
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// mdlRadio
import { MdlRadioComponent } from '../../mdl-radio/mdl-radio.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-radio-page',
  template: require('./mdl-radio-page.component.html'),
  directives: [MdlRadioComponent, FORM_DIRECTIVES]
})
export class MdlRadioPageComponent {
  gender: string;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
