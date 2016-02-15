import {Component, OnInit, ElementRef} from 'angular2/core';
@Component({
  selector: '[mdlUpgrade]'
})

export class MdlUpgrade implements OnInit {
  constructor(public elem: ElementRef) {}
  ngOnInit() {
    componentHandler.upgradeElements(this.elem.navtiveElement);
  }
}
