// Imports from @angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdl-spinner-page',
  templateUrl: './mdl-spinner-page.template.html'
})
export class MdlSpinnerPageComponent implements OnInit {
  spinner = 0;
  spinner2 = 33;
  buffer = 87;

  ngOnInit() {
    setInterval(() => {
      this.spinner += 5;
      if (this.spinner === 100) { this.spinner = 0; }
    }, 500);
  }
}
