// Imports from @angular
import { EventEmitter, HostListener, ElementRef, Renderer, OnChanges } from '@angular/core';
import { Input, Output, Component, forwardRef, AfterViewChecked } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const MDL_SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdlSelectComponent),
  multi: true
};

@Component({
  selector: 'mdlSelect, mdl-select',
  template: `
    <div class="mdl-selectfield mdl-js-selectfield" [ngClass]="cls" mdl>
      <select #select class="mdl-selectfield__select"
        [value]="value" [id]="id" [disabled]="disabled"
        (blur)="onTouched()" (change)="update(select.value)">
        <ng-content></ng-content>
      </select>
      <label class="mdl-selectfield__label" [attr.for]="id">{{placeholder}}</label>
      <span class="mdl-selectfield__error">{{errMsg}}</span>
    </div>
  `,
  providers: [
    MDL_SELECT_VALUE_ACCESSOR
  ]
})
export class MdlSelectComponent implements OnChanges, AfterViewChecked, ControlValueAccessor {
  @Input() placeholder: string;
  @Input('class') cls: string;
  @Input() disabled = false;
  @Input() errMsg: string;
  @Input() label: string;
  @Input() value: string;
  @Input() id: string;
  @Output() changes = new EventEmitter();
  initialized = false;

  constructor(
    public _el: ElementRef,
    public _ren: Renderer
  ) {}

  ngOnChanges() {
    if (this.label) { this.placeholder = this.label; }
  }

  ngAfterViewChecked() {
    if (this.value && !this.initialized) {
      this.updateSelectField();
    }
  }

  update(value) {
    this.value = value;
    this.changes.emit(value);
  }

  updateSelectField() {
    if (!this.value) { return; }
    const options = this._el.nativeElement.getElementsByTagName('option');
    const optionsEl = this._el.nativeElement
                        .getElementsByClassName('mdl-selectfield__list-option-box')[0]
                        .children[0].children;
    this._ren.invokeElementMethod(
      this._el.nativeElement.getElementsByClassName('mdl-selectfield__box')[0], 'click'
    );
    for (const i in options) {
      if (options[i].value === this.value) {
        this._ren.setElementAttribute(options[i], 'selected', 'selected');
        this._ren.invokeElementMethod(optionsEl[i], 'click');
      }
    }
    this.initialized = true;
  }

  // Needed to properly implement ControlValueAccessor.
  @HostListener('changes', ['$event'])
  onChange = (_) => { console.log(); }
  @HostListener('blur', ['$event'])
  onTouched = () => { console.log(); }
  writeValue(value: string): void {
    this.value = value;
    if (!this.initialized) { this.updateSelectField(); }
  }
  registerOnChange(fn: (_) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
