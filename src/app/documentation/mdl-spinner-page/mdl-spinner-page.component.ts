// Imports from @angular
import { Component } from '@angular/core';

@Component({
  selector: 'mdl-spinner-page',
  template: require('./mdl-spinner-page.template.html')
})
export class MdlSpinnerPageComponent {
  spinner: number = 0;
  spinner2: number = 33;
  buffer: number = 87;
  ngOnInit() {
    setInterval(() => {
      this.spinner += 5;
      if(this.spinner === 100) this.spinner = 0;
    }, 500);
  }
}
