// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
// Services
import { MdlService } from './mdl.service'

export const MDL_RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlRadioComponent),
  multi: true
};

@Component({
  selector: 'mdlRadio, mdl-radio, md-radio-button',
  template: `
  <label
    mdl [class.is-checked]="value === val"
    class="mdl-radio mdl-js-radio"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp type="radio" class="mdl-radio__button"
      [value]="value" [ngClass]="class" [name]="name" [disabled]="disabled"
      (blur)="onTouched()" (change)="update(inp.value)"
    />
    <span class="mdl-radio__label">{{placeholder}}</span>
  </label>
  `,
  providers: [MDL_RADIO_VALUE_ACCESSOR]
})
export class MdlRadioComponent implements ControlValueAccessor {
  @Input() ripple: boolean = MdlService.rippleEffect;
  @Input() disabled: boolean = false;
  @Input() placeholder: string;
  @Input() value: string = '';
  @Input() class: string;
  @Input() label: string;
  @Input() name: string;
  @Output() changes = new EventEmitter();
  val: string;

  ngOnChanges() {
    if(this.label) this.placeholder = this.label;
  }

  update(value) {
    this.value = value;
    this.changes.emit(value);
  }

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(value: string): void { this.val = value; }
  registerOnChange(fn: (_) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
