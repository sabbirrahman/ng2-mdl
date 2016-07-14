// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlService } from '../../services/mdl.service'

export const MDL_CHECK_BOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlCheckBoxComponent),
  multi: true
};

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
  @Input() ripple: boolean = MdlService.rippleEffect;
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
