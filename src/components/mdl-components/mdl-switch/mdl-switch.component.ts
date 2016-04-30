// Imports from Angular2
import { Input, Output, Provider, Component, forwardRef, EventEmitter, HostListener } from 'angular2/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from 'angular2/common';
// Directives
import { MdlUpgradeDirective } from '../../../directives/mdl-upgrade.directive'
// Services
import { MdlConfigService } from '../../../services/mdl-config.service'

const MDL_SWITCH_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlSwitchComponent), multi: true }
);

@Component({
  selector: 'mdlSwitch, mdl-switch',
  template: `
  <label
    mdlUpgrade [class.is-checked]="value"
    class="mdl-switch mdl-js-switch"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="checkbox" class="mdl-switch__input"
      [checked]="value" [ngClass]="class"
      (blur)="onTouched()" (change)="changes.emit(inp.checked)"
    />
    <span class="mdl-switch__label">{{label}}</span>
  </label>
  `,
  directives: [MdlUpgradeDirective],
  providers: [MDL_SWITCH_VALUE_ACCESSOR]
})
export class MdlSwitchComponent {
  @Input() class: string;
  @Input() label: string;
  @Input() value: string = '';
  @Input() ripple: boolean = this.mdlConfig.rippleEffect;
  @Output() changes = new EventEmitter();

  constructor(
    public mdlConfig: MdlConfigService
  ) {}

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(value: any): void { this.value = value; }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
