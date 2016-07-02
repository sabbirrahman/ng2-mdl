// Imports from Angular2
import { Input, Output, Provider, Component, forwardRef, EventEmitter, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/common';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlConfigService } from '../../services/mdl-config.service'

const MDL_SWITCH_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlSwitchComponent), multi: true }
);

@Component({
  selector: 'mdlSwitch, mdl-switch',
  template: `
  <label
    mdl [class.is-checked]="value"
    class="mdl-switch mdl-js-switch"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="checkbox" class="mdl-switch__input"
      [checked]="value" [ngClass]="class" [disabled]="disabled"
      (blur)="onTouched()" (change)="changes.emit(inp.checked)"
    />
    <span class="mdl-switch__label">{{label}}</span>
  </label>
  `,
  directives: [MdlDirective],
  providers: [MDL_SWITCH_VALUE_ACCESSOR]
})
export class MdlSwitchComponent implements ControlValueAccessor {
  @Input() class: string;
  @Input() label: string;
  @Input() value: string = '';
  @Input() ripple: boolean = MdlConfigService.rippleEffect;
  @Input() disabled: boolean = false;
  @Output() changes = new EventEmitter();

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(value: any): void { this.value = value; }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
