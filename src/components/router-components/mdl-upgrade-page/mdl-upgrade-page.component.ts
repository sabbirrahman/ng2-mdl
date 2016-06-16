import {Component} from '@angular/core';
let hljs = require('highlight.js/lib/highlight.js');

@Component({
  selector: 'mdl-upgrade-page',
  template: require('./mdl-upgrade-page.component.html')
})

export class MdlUpgradePageComponent {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
