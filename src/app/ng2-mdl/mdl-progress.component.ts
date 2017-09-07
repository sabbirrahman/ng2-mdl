// Imports from @angular
import { Input, Component, ElementRef } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'mdlProgress, mdl-progress, md-progress-bar',
  template: `
    <div mdl [id]="id"
      class="mdl-progress mdl-js-progress"
      [class.mdl-progress__indeterminate]="mode === 'indeterminate'"
    >
    </div>
  `
})
export class MdlProgressComponent implements OnInit, OnChanges {
  @Input() indeterminate = false;
  @Input() progress: number;
  @Input() buffer: number;
  @Input() id: string;

  @Input() mode = 'determinate';
  @Input() bufferValue: number;
  @Input() value: number;

  constructor(
    public el: ElementRef
  ) {}

  ngOnInit() {
    this.el.nativeElement.children[0].addEventListener('mdl-componentupgraded', () => {
      this.el.nativeElement.children[0].MaterialProgress.setProgress(this.value);
      this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.bufferValue);
    });
  }

  ngOnChanges() {
    if (this.indeterminate) { this.mode = 'indeterminate'; }
    if (this.buffer) { this.bufferValue = this.buffer; }
    if (this.progress) { this.value = this.progress; }

    if (!this.el.nativeElement.children[0].MaterialProgress) { return; }
    if (!this.value) { return; }
    this.el.nativeElement.children[0].MaterialProgress.setProgress(this.value);
    if (!this.bufferValue) { return; }
    this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.bufferValue);
  }
}
