// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Services
import { MdlService } from '../../services/mdl.service'

export const MDL_TEXT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlTextFieldComponent),
  multi: true
};
@Component({
  selector: 'mdlTextField, mdl-text-field',
  template: `
  <div
    mdl [class.is-dirty]="value"
    class="mdl-textfield mdl-js-textfield "
    [class.mdl-textfield--floating-label]="floating"
  >
    <input #inp class="mdl-textfield__input"
      [id]="id" [type]="type" [value]="value" [ngClass]="class"
      [disabled]="disabled"
      (blur)="onTouched()" (keyup)="changes.emit(inp.value)"
    >
    <label [attr.for]="id" class="mdl-textfield__label">{{label}}</label>
    <span class="mdl-textfield__error">{{errMsg}}</span>
  </div>
  `,
  directives: [MdlDirective],
  providers: [MDL_TEXT_FIELD_VALUE_ACCESSOR]
})
export class MdlTextFieldComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() class: string;
  @Input() errMsg: string;
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() label: string;
  @Input() floating: boolean = MdlService.floating;
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
