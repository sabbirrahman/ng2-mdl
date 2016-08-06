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
  selector: 'mdlCheckBox, mdl-check-box, md-checkbox',
  template: `
  <label
    mdl [class.is-checked]="checked"
    class="mdl-checkbox mdl-js-checkbox"
    [ngClass]="{'mdl-js-ripple-effect': ripple}"
  >
    <input #inp [checked]="checked" [ngClass]="class" [disabled]="disabled"
      type="checkbox" class="mdl-checkbox__input"
      (blur)="onTouched()" (change)="update(inp.checked)"
    />
    <span class="mdl-checkbox__label">{{placeholder}}</span>
  </label>
  `,
  directives: [MdlDirective],
  providers: [MDL_CHECK_BOX_VALUE_ACCESSOR]
})
export class MdlCheckBoxComponent implements ControlValueAccessor {
  @Input() ripple: boolean = MdlService.rippleEffect;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() label: string;
  @Output() changes = new EventEmitter();

  ngOnChanges() {
    if(this.label) this.placeholder = this.label;
  }

  update(checked) {
    this.checked = checked;
    this.changes.emit(checked);
  }

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(checked: any): void { this.checked = checked; }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
