// Imports from @angular
import { Component } from '@angular/core';
// mdlCheckBox
import { MdlCheckBoxComponent } from '../../mdl-check-box/mdl-check-box.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-check-box-page',
  template: require('./mdl-check-box-page.component.html'),
  directives: [MdlCheckBoxComponent]
})
export class MdlCheckBoxPageComponent {
  ready: boolean;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
