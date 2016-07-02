// Imports from Angular2
import { Input, Component, ElementRef, OnChanges, OnInit } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'

@Component({
  selector: 'mdlProgress, mdl-progress',
  template: `
    <div mdl [id]="id"
      class="mdl-progress mdl-js-progress"
      [class.mdl-progress__indeterminate]="indeterminate"
    >
    </div>
  `,
  directives: [MdlDirective]
})
export class MdlProgressComponent implements OnInit, OnChanges {
  @Input() buffer: number;
  @Input() progress: number;
  @Input() indeterminate: boolean = false;

  constructor(
    public el: ElementRef
  ) {}

  ngOnInit() {
      this.el.nativeElement.children[0].addEventListener('mdl-componentupgraded', () => {
        this.el.nativeElement.children[0].MaterialProgress.setProgress(this.progress);
        this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.buffer);
      });
  }

  ngOnChanges() {
    if(!this.el.nativeElement.children[0].MaterialProgress) return;
    if(!this.progress) return;
    this.el.nativeElement.children[0].MaterialProgress.setProgress(this.progress);
    if(!this.buffer) return;
    this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.buffer);
  }
}
