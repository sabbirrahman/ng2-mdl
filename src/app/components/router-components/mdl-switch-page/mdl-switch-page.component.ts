// Imports from @angular
import { Component } from '@angular/core';
// mdlSwitch
import { MdlSwitchComponent } from '../../mdl-switch/mdl-switch.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-switch-page-page',
  template: require('./mdl-switch-page.component.html'),
  directives: [MdlSwitchComponent]
})
export class MdlSwitchPageComponent {
  example: boolean;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
