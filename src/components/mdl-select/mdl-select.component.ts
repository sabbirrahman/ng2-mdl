// Imports from @angular
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/common';
import { NgFormControl, FORM_DIRECTIVES } from '@angular/common';
import { EventEmitter, HostListener } from '@angular/core';
import { Input, Output, Component } from '@angular/core';
import { Provider, forwardRef } from '@angular/core';
// Directives
import { MdlUpgradeDirective } from '../../directives/mdl-upgrade.directive'

const MDL_SELECT_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdlSelectComponent), multi: true }
);
@Component({
  selector: 'mdlSelect, mdl-select',
  template: `
    <div class="mdl-selectfield mdl-js-selectfield" [ngClass]="class" mdl-upgrade>
      <select class="mdl-selectfield__select"
        [value]="value" #select [id]="id"
        (blur)="onTouched()"
        (change)="changes.emit(select.value)">
        <ng-content></ng-content>
      </select>
      <label class="mdl-selectfield__label" [attr.for]="id">{{label}}</label>
      <!-- <span class="mdl-selectfield__error">Select aw value</span> -->
    </div>
  `,
  directives: [
    MdlUpgradeDirective
  ],
  providers: [
    MDL_SELECT_VALUE_ACCESSOR
  ]
})
export class MdlSelectComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() value: string;
  @Input() label: string;
  @Input() class: string;
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
