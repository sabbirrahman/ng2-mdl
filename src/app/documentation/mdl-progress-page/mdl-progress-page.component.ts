// Imports from @angular
import { Component } from '@angular/core';

@Component({
  selector: 'mdl-progress-page',
  template: require('./mdl-progress-page.template.html')
})
export class MdlProgressPageComponent {
  progress: number = 0;
  progress2: number = 33;
  buffer: number = 87;
  ngOnInit() {
    setInterval(() => {
      this.progress += 5;
      if(this.progress === 100) this.progress = 0;
    }, 500);
  }
}
