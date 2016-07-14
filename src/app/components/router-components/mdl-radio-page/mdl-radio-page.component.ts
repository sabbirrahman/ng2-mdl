// Imports from @angular
import { Component } from '@angular/core';
// mdlRadio
import { MdlRadioComponent } from '../../mdl-radio/mdl-radio.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-radio-page',
  template: require('./mdl-radio-page.component.html'),
  directives: [MdlRadioComponent]
})
export class MdlRadioPageComponent {
  gender: string;
  ngOnInit() {
    hljs.initHighlighting();
  }
}
