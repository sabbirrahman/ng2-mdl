// Imports from Angular2
import { Input, Component } from '@angular/core';
// Directives
import { MdlUpgradeDirective } from '../../directives/mdl-upgrade.directive'

@Component({
  selector: 'mdlSpinner, mdl-spinner',
  template: `
    <div mdl-upgrade
      class="mdl-spinner mdl-js-spinner"
      [ngClass]="{
        'is-active': active,
        'mdl-spinner--single-color': singleColor
      }"
    >
    </div>
  `,
  directives: [MdlUpgradeDirective]
})
export class MdlSpinnerComponent {
  @Input() active: boolean = true;
  @Input() singleColor: number;
}
