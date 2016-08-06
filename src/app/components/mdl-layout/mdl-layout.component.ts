// Imports from @angular
import { Input, Component } from '@angular/core';
// Directives
import { MdlDirective } from '../../directives/mdl.directive'
// Interface
export interface MenuItem {
  title: string;
  link: string;
  routerLink: Array<any>;
}

@Component({
  selector: 'mdlLayout, mdl-layout',
  template: `
  <div mdl class="mdl-layout mdl-js-layout"
    [class.mdl-layout--fixed-drawer]="fixedDrawer"
    [class.mdl-layout--fixed-header]="fixedHeader"
  >
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title" *ngIf="drawerTitle">{{drawerTitle}}</span>
      <nav class="mdl-navigation" *ngIf="drawerMenu">
        <a class="mdl-navigation__link"
          *ngFor="let m of drawerMenu" [routerLink]="m.routerLink"
          [href]="m.link">{{m.title}}
        </a>
      </nav>
    </div>
    <ng-content></ng-content>
  </div>
  `,
  directives: [MdlDirective]
})
export class MdlLayoutComponent {
  // Decorator
  @Input() fixedHeader: boolean;
  @Input() fixedDrawer: boolean;
  @Input() drawerTitle: string;
  @Input() drawerMenu: Array<MenuItem>;
}

@Component({
  'selector': 'mdlHeader, mdl-header',
  template: `
  <header mdl class="mdl-layout__header"
    [class.mdl-layout__header--transparent]="transparent"
    [class.mdl-layout__header--scroll]="scrollableHeader"
    [class.mdl-layout__header--waterfall]="waterfall"
    [hidden]="noHeader"
  >
    <div class="mdl-layout__header-row" *ngIf="waterfall">
      <span class="mdl-layout-title" *ngIf="title">{{title}}</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
           mdl-textfield--floating-label mdl-textfield--align-right" *ngIf="search">
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
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title" *ngIf="!waterfall">{{title}}</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation" *ngIf="menu">
        <a class="mdl-navigation__link"
          *ngFor="let m of menu" [routerLink]="m.routerLink"
          [href]="m.link">{{m.title}}
        </a>
      </nav>
    </div>
    <ng-content></ng-content>
  </header>
  `,
  directives: [MdlDirective]
})
export class MdlHeaderComponent {
  @Input() title: string;
  @Input() search: boolean = true;
  @Input() menu: Array<MenuItem>;
  @Input() noHeader: boolean;
  @Input() waterfall: boolean;
  @Input() transparent: boolean;
  @Input() scrollableHeader: boolean;
}

@Component({
  'selector': 'mdlDrawer, mdl-drawer',
  template: `
  <div mdl class="mdl-layout__drawer">
    <span class="mdl-layout-title" *ngIf="title">{{title}}</span>
    <nav class="mdl-navigation" *ngIf="menu">
      <a class="mdl-navigation__link"
        *ngFor="let m of menu" [routerLink]="m.routerLink"
        [href]="m.link">{{m.title}}
      </a>
    </nav>
    <ng-content></ng-content>
  </div>
  `,
  directives: [MdlDirective]
})
export class MdlDrawerComponent {
  @Input() title: string;
  @Input() menu: Array<MenuItem>;
}
