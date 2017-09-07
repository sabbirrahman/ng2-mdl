// Imports from @angular
import { Input, Component } from '@angular/core';

@Component({
  selector: 'mdlSpinner, mdl-spinner',
  template: `
    <div mdl
      class="mdl-spinner mdl-js-spinner"
      [ngClass]="{
        'is-active': active,
        'mdl-spinner--single-color': singleColor
      }"
    >
    </div>
  `
})
export class MdlSpinnerComponent {
  @Input() singleColor: number;
  @Input() active = true;
}
