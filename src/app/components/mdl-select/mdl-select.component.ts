@@ -1,83 +0,0 @@
// Imports from @angular
import { EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Input, Output, Component, forwardRef } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'

export const MDL_SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlSelectComponent),
  multi: true
};

@Component({
  selector: 'mdlSelect, mdl-select',
  template: `
    <div class="mdl-selectfield mdl-js-selectfield" [ngClass]="class" mdl>
      <select class="mdl-selectfield__select"
        [value]="value" #select [id]="id" [disabled]="disabled"
        (blur)="onTouched()"
        (change)="changes.emit(select.value)">
        <ng-content></ng-content>
      </select>
      <label class="mdl-selectfield__label" [attr.for]="id">{{label}}</label>
      <!-- <span class="mdl-selectfield__error">Select aw value</span> -->
    </div>
  `,
  directives: [
    MdlDirective
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
  @Input() disabled: boolean = false;
  @Output() changes = new EventEmitter();
  initialized: boolean = false;

  constructor(
    public _el: ElementRef,
    public _ren: Renderer
  ) {}

  ngAfterViewChecked() {
    if(this.value && !this.initialized)
      this.updateSelectField();
  }

  updateSelectField() {
    if(!this.value) return;
    let options = this._el.nativeElement.getElementsByTagName('option');
    let optionsEl = this._el.nativeElement
                        .getElementsByClassName('mdl-selectfield__list-option-box')[0]
                        .children[0].children;
    this._ren.invokeElementMethod(
      this._el.nativeElement.getElementsByClassName('mdl-selectfield__box')[0], 'click'
    );
    for(let i in options) {
      if(options[i].value == this.value) {
        this._ren.setElementAttribute(options[i], 'selected', 'selected');
        this._ren.invokeElementMethod(optionsEl[i], 'click');
      }
    }
    this.initialized = true;
  }

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); };
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); };
  writeValue(value: any): void {
    this.value = value;
    if(!this.initialized) this.updateSelectField();
  }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
