// Imports from Angular2
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
// mdlSpinner
import { MdlSpinnerComponent } from '../../mdl-spinner/mdl-spinner.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-spinner-page',
  template: require('./mdl-spinner-page.component.html'),
  directives: [MdlSpinnerComponent, FORM_DIRECTIVES]
})
export class MdlSpinnerPageComponent {
  spinner: number = 0;
  spinner2: number = 33;
  buffer: number = 87;
  ngOnInit() {
    hljs.initHighlighting();
    setInterval(() => {
      this.spinner += 5;
      if(this.spinner === 100) this.spinner = 0;
    }, 500);
  }
}
