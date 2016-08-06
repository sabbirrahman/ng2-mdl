// Imports from @angular
import { Input, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlService } from '../../services/mdl.service'

@Component({
  selector: 'mdlButton, mdl-button',
  template: `
    <button class="mdl-button mdl-js-button"
      [ngClass]="{'mdl-js-ripple-effect': ripple}"
      [class.mdl-button--primary]="color === 'primary' && !raised"
      [class.mdl-button--colored]="color === 'primary' && raised"
      [class.mdl-button--accent]="color === 'accent'"
      [class.mdl-button--raised]="raised"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  directives: [MdlDirective]
})
export class MdlButtonComponent {
  @Input() ripple: boolean = MdlService.rippleEffect;
  @Input() disabled: boolean = false;
  @Input() raised: boolean = true;
  @Input() theme: string;
  @Input() color: string;

  ngOnChanges() {
    if(this.theme) this.color = this.theme;
  }
}
