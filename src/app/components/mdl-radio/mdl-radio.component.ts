// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlService } from '../../services/mdl.service'

export const MDL_RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlRadioComponent),
  multi: true
};

@Component({
  selector: 'mdlRadio, mdl-radio',
  template: `
  <label
    mdl [class.is-checked]="value === val"
    class="mdl-radio mdl-js-radio"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="radio" class="mdl-radio__button"
      [value]="value" [ngClass]="class" [name]="name" [disabled]="disabled"
      (blur)="onTouched()" (change)="changes.emit(inp.value)"
    />
    <span class="mdl-radio__label">{{label}}</span>
  </label>
  `,
  directives: [MdlDirective],
  providers: [MDL_RADIO_VALUE_ACCESSOR]
})
export class MdlRadioComponent implements ControlValueAccessor {
  val: string;
  @Input() name: string;
  @Input() class: string;
  @Input() label: string;
  @Input() value: string = '';
  @Input() ripple: boolean = MdlService.rippleEffect;
  @Input() disabled: boolean = false;
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
