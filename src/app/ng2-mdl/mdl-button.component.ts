// Imports from @angular
import { Input, Component, OnChanges } from '@angular/core';
// Services
import { MdlService } from './mdl.service';

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
  styles: [`
    .mdl-button {
      display: inline-flex;
      align-items: center;
    }
  `]
})
export class MdlButtonComponent implements OnChanges {
  @Input() ripple: boolean = MdlService.rippleEffect;
  @Input() disabled = false;
  @Input() raised = true;
  @Input() theme: string;
  @Input() color: string;

  ngOnChanges() {
    if (this.theme) { this.color = this.theme; }
  }
}
