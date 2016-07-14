// Imports from @angular
import { Component } from '@angular/core';
// mdlButton
import { MdlButtonComponent } from '../../mdl-button/mdl-button.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-button-page-page',
  template: require('./mdl-button-page.component.html'),
  directives: [MdlButtonComponent]
})
export class MdlButtonPageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
