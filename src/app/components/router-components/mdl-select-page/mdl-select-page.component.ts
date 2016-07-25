// Imports from @angular
import { Component } from '@angular/core';
// mdlButton
import { MdlSelectComponent } from '../../mdl-select/mdl-select.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-select-page-page',
  template: require('./mdl-select-page.component.html'),
  directives: [MdlSelectComponent]
})
export class MdlSelectPageComponent {
  binding: string = 'value3';
  ngOnInit() {
    hljs.initHighlighting();
  }
}
