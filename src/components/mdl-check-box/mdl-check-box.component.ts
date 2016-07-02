// Imports from Angular2
import { Input, Output, Provider, Component, forwardRef, EventEmitter, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/common';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlConfigService } from '../../services/mdl-config.service'

const MDL_CHECK_BOX_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlCheckBoxComponent), multi: true }
);

@Component({
  selector: 'mdlCheckBox, mdl-check-box',
  template: `
  <label
    mdl [class.is-checked]="value"
    class="mdl-checkbox mdl-js-checkbox"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp [checked]="value" [ngClass]="class" [disabled]="disabled"
      type="checkbox" class="mdl-checkbox__input"
      (blur)="onTouched()" (change)="changes.emit(inp.checked)"
    />
    <span class="mdl-checkbox__label">{{label}}</span>
  </label>
  `,
  directives: [MdlDirective],
  providers: [MDL_CHECK_BOX_VALUE_ACCESSOR]
})
export class MdlCheckBoxComponent implements ControlValueAccessor {
  @Input() class: string;
  @Input() label: string;
  @Input() value: boolean = false;
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
