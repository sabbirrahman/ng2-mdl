import { Directive, OnInit, ElementRef } from '@angular/core';
import { isBrowser } from 'angular2-universal';
declare let componentHandler: any;

@Directive({
  selector: '[mdl], [mdlUpgrade], [mdl-upgrade]'
})
export class MdlDirective implements OnInit {
  constructor(public elem: ElementRef) {}
  ngOnInit() {
    if (isBrowser)
      componentHandler.upgradeElements(this.elem.nativeElement);
  }
}
