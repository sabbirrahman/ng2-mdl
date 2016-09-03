// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
// Services
import { MdlService } from './mdl.service'

export const MDL_TEXT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlTextFieldComponent),
  multi: true
};
@Component({
  selector: 'mdlTextField, mdl-text-field, md-input',
  template: `
  <div
    mdl [class.is-dirty]="value"
    class="mdl-textfield mdl-js-textfield"
    [class.mdl-textfield--floating-label]="floating"
  >
    <input #inp class="mdl-textfield__input" [ngClass]="class" [required]="required"
      [id]="id" [type]="type" [value]="value" [disabled]="disabled"
      (blur)="onTouched()" (keyup)="update(inp.value)"
    >
    <label [attr.for]="id" class="mdl-textfield__label">{{placeholder}}</label>
    <span class="mdl-textfield__error">{{errMsg}}</span>
  </div>
  `,
  providers: [MDL_TEXT_FIELD_VALUE_ACCESSOR]
})
export class MdlTextFieldComponent implements ControlValueAccessor {
  @Input() floating: boolean = MdlService.floating;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() value: string = '';
  @Input() errMsg: string;
  @Input() class: string;
  @Input() label: string;
  @Input() id: string;
  @Output() changes = new EventEmitter();

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
  writeValue(value: any): void { this.value = value; }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
