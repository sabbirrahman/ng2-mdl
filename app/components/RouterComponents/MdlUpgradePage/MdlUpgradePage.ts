import {Component} from 'angular2/core';
@Component({
  selector: 'mdl-upgrade-page',
  templateUrl: './app/components/RouterComponents/MdlUpgradePage/MdlUpgradePage.html'
})

export class MdlUpgradePage {
  ngOnInit() {
    hljs.initHighlighting();
  }
}
