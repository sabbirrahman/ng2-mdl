// Imports from Angular2
import { Input, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlConfigService } from '../../services/mdl-config.service'

@Component({
  selector: 'mdlButton, mdl-button',
  template: `
    <button class="mdl-button mdl-js-button"
      [ngClass]="{'mdl-js-ripple-effect': ripple}"
      [class.mdl-button--primary]="theme === 'primary' && !raised"
      [class.mdl-button--colored]="theme === 'primary' && raised"
      [class.mdl-button--accent]="theme === 'accent'"
      [class.mdl-button--raised]="raised"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  directives: [MdlDirective]
})
export class MdlButtonComponent {
  @Input() theme: string;
  @Input() raised: boolean = true;
  @Input() ripple: boolean = MdlConfigService.rippleEffect;
  @Input() disabled: boolean = false;
}
