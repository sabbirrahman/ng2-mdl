// Imports from @angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdl-progress-page',
  templateUrl: './mdl-progress-page.template.html'
})
export class MdlProgressPageComponent implements OnInit {
  progress = 0;
  progress2 = 33;
  buffer = 87;

  ngOnInit() {
    setInterval(() => {
      this.progress += 5;
      if (this.progress === 100) { this.progress = 0; }
    }, 500);
  }
}
