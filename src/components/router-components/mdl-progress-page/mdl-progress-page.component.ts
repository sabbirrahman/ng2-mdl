// Imports from Angular2
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
// mdlProgress
import { MdlProgressComponent } from '../../mdl-components/mdl-progress/mdl-progress.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-progress-page',
  template: require('./mdl-progress-page.component.html'),
  directives: [MdlProgressComponent, FORM_DIRECTIVES]
})
export class MdlProgressPageComponent {
  progress: number = 0;
  progress2: number = 33;
  buffer: number = 87;
  ngOnInit() {
    hljs.initHighlighting();
    setInterval(() => {
      this.progress += 5;
      if(this.progress === 100) this.progress = 0;
    }, 500);
  }
}
