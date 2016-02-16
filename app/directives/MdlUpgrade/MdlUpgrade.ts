import {Directive, OnInit, ElementRef} from 'angular2/core';
@Directive({
  selector: '[mdlUpgrade]'
})

export class MdlUpgrade implements OnInit {
  constructor(public elem: ElementRef) {}
  ngOnInit() {
    window.componentHandler.upgradeElements(this.elem.nativeElement);
  }
}
