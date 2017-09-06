import { Directive, AfterViewInit, ElementRef } from '@angular/core';
declare let componentHandler: any;

@Directive({
  selector: '[mdl], [mdlUpgrade], [mdl-upgrade]'
})
export class MdlDirective implements AfterViewInit {
  constructor(public elem: ElementRef) {}

  ngAfterViewInit() {
    const isNode = typeof module !== 'undefined' && 'export' in module ? true : false;
    if (!isNode) {
      componentHandler.upgradeElements(this.elem.nativeElement);
    }
  }
}
