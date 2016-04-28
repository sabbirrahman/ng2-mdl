import {Directive, OnInit, ElementRef} from 'angular2/core';
declare let componentHandler: any;

@Directive({
  selector: '[mdlUpgrade]'
})
export class MdlUpgradeDirective implements OnInit {
  constructor(public elem: ElementRef) {}
  ngOnInit() {
    componentHandler.upgradeElements(this.elem.nativeElement);
  }
}
