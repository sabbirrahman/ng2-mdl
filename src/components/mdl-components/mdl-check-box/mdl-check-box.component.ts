// Imports from Angular2
import { Input, Output, Provider, Component, forwardRef, EventEmitter, HostListener } from 'angular2/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from 'angular2/common';
// Directives
import { MdlUpgradeDirective } from '../../../directives/mdl-upgrade.directive'
// Services
import { MdlConfigService } from '../../../services/mdl-config.service'

const MDL_CHECK_BOX_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlCheckBoxComponent), multi: true }
);

@Component({
  selector: 'mdlCheckBox, mdl-check-box',
  template: `
  <label
    mdlUpgrade [class.is-checked]="value"
    class="mdl-checkbox mdl-js-checkbox"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="checkbox" class="mdl-checkbox__input"
      [id]="id" [checked]="value" [ngClass]="class"
      (blur)="onTouched()" (change)="changes.emit(inp.checked);"
    />
    <span class="mdl-checkbox__label">{{label}}</span>
  </label>
  `,
  directives: [MdlUpgradeDirective],
  providers: [MDL_CHECK_BOX_VALUE_ACCESSOR]
})
export class MdlCheckBoxComponent {
  @Input() class: string;
  @Input() label: string;
  @Input() value: boolean = false;
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
