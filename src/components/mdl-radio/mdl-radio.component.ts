// Imports from Angular2
import { Input, Output, Provider, Component, forwardRef, EventEmitter, HostListener } from 'angular2/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from 'angular2/common';
// Directives
import { MdlUpgradeDirective } from '../../directives/mdl-upgrade.directive'
// Services
import { MdlConfigService } from '../../services/mdl-config.service'

const MDL_RADIO_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlRadioComponent), multi: true }
);

@Component({
  selector: 'mdlRadio, mdl-radio',
  template: `
  <label
    mdlUpgrade [class.is-checked]="value === val"
    class="mdl-radio mdl-js-radio"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="radio" class="mdl-radio__button"
      [value]="value" [ngClass]="class" [name]="name"
      (blur)="onTouched()" (change)="changes.emit(inp.value)"
    />
    <span class="mdl-radio__label">{{label}}</span>
  </label>
  `,
  directives: [MdlUpgradeDirective],
  providers: [MDL_RADIO_VALUE_ACCESSOR]
})
export class MdlRadioComponent implements ControlValueAccessor {
  val: string;
  @Input() name: string;
  @Input() class: string;
  @Input() label: string;
  @Input() value: string = '';
  @Input() ripple: boolean = MdlConfigService.rippleEffect;
  @Output() changes = new EventEmitter();

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(value: any): void { this.val = value; }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
