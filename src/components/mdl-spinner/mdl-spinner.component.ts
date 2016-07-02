// Imports from Angular2
import { Input, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'

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
  `,
  directives: [MdlDirective]
})
export class MdlSpinnerComponent {
  @Input() active: boolean = true;
  @Input() singleColor: number;
}
