// Imports from Angular2
import { Input, Component } from 'angular2/core';
// Directives
import { MdlUpgradeDirective } from '../../../directives/mdl-upgrade.directive'
// Services
import { MdlConfigService } from '../../../services/mdl-config.service'

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
