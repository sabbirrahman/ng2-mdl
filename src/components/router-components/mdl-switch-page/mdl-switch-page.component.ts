// Imports from Angular2
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// mdlSwitch
import { MdlSwitchComponent } from '../../mdl-switch/mdl-switch.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-switch-page-page',
  template: require('./mdl-switch-page.component.html'),
  directives: [MdlSwitchComponent, FORM_DIRECTIVES]
})
export class MdlSwitchPageComponent {
  example: boolean;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
