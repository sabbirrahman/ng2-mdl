// Imports from @angular
import { Component } from '@angular/core';
// mdlProgress
import { MdlProgressComponent } from '../../mdl-progress/mdl-progress.component';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-progress-page',
  template: require('./mdl-progress-page.component.html'),
  directives: [MdlProgressComponent]
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
