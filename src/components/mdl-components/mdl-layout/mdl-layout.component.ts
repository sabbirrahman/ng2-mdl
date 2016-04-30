// Imports from Angular2
import { Input, Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
// Directives
import { MdlUpgradeDirective } from '../../../directives/mdl-upgrade.directive'
// Services
import { MdlConfigService } from '../../../services/mdl-config.service'

@Component({
  selector: 'mdlLayout, mdl-layout',
  template: `
  <div mdl-upgrade class="mdl-layout mdl-js-layout"
    [class.mdl-layout--fixed-drawer]="fixedDrawer"
    [class.mdl-layout--fixed-header]="fixedHeader"
  >
    <header class="mdl-layout__header"
      [class.mdl-layout__header--transparent]="transparent"
      [class.mdl-layout__header--scroll]="scrollableHeader"
      [class.mdl-layout__header--waterfall]="waterfall"
      [hidden]="noHeader"
    >
      <!-- Top row, always visible -->
      <div class="mdl-layout__header-row" [hidden]="!waterfall">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon"
                 for="waterfall-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample"
                   id="waterfall-exp">
          </div>
        </div>
      </div>
      <!-- Bottom row, not visible on scroll -->
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link"
            *ngFor="#menu of headerMenu" [routerLink]="[menu.routerLink]"
            [href]="menu.link">{{menu.title}}
          </a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">{{drawerTitle}}</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link"
          *ngFor="#menu of drawerMenu"
          [href]="menu.link">{{menu.title}}
        </a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <ng-content></ng-content>
    </main>
  </div>
  `,
  directives: [MdlUpgradeDirective]
})
export class MdlLayoutComponent {
  // Data
  @Input() drawerTitle: string;
  @Input() headerTitle: string;
  @Input() drawerMenu: Array<MenuItem>;
  @Input() headerMenu: Array<MenuItem>;
  // Decorator
  @Input() transparent: boolean;
  @Input() fixedHeader: boolean;
  @Input() fixedDrawer: boolean;
  @Input() scrollableHeader: boolean;
  @Input() noHeader: boolean;
  @Input() waterfall: boolean;
}

interface MenuItem {
  title: string;
  link: string;
  routerLink: string;
}
