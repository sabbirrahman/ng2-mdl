// Imports from @angular
import { Component } from '@angular/core';
// mdlLayout
import { MdlLayoutComponent } from '../../mdl-layout/mdl-layout.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-layout-page',
  template: require('./mdl-layout-page.component.html'),
  directives: [MdlLayoutComponent]
})
export class MdlLayoutPageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
