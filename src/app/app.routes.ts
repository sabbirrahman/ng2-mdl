// Imports from @angular
import { RouterConfig } from '@angular/router';
// Router Components
import { MdlTextFieldPageComponent } from './components/router-components';
import { MdlCheckBoxPageComponent } from './components/router-components';
import { MdlProgressPageComponent } from './components/router-components';
import { MdlUpgradePageComponent } from './components/router-components';
import { MdlSpinnerPageComponent } from './components/router-components';
import { MdlServicePageComponent } from './components/router-components';
import { MdlSelectPageComponent } from './components/router-components';
import { MdlSwitchPageComponent } from './components/router-components';
import { MdlButtonPageComponent } from './components/router-components';
import { MdlLayoutPageComponent } from './components/router-components';
import { MdlRadioPageComponent } from './components/router-components';
import { DashboardComponent } from './components/router-components';

export const routes: RouterConfig = [
  { path: '',               component: DashboardComponent        },
  { path: 'mdl-upgrade',    component: MdlUpgradePageComponent   },
  { path: 'mdl-text-field', component: MdlTextFieldPageComponent },
  { path: 'mdl-select',     component: MdlSelectPageComponent    },
  { path: 'mdl-check-box',  component: MdlCheckBoxPageComponent  },
  { path: 'mdl-radio',      component: MdlRadioPageComponent     },
  { path: 'mdl-switch',     component: MdlSwitchPageComponent    },
  { path: 'mdl-button',     component: MdlButtonPageComponent    },
  { path: 'mdl-progress',   component: MdlProgressPageComponent  },
  { path: 'mdl-spinner',    component: MdlSpinnerPageComponent   },
  { path: 'mdl-layout',     component: MdlLayoutPageComponent    },
  { path: 'mdl-service',    component: MdlServicePageComponent   }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  // 'About': require('es6-promise-loader!./about'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  // asyncRoutes['About'],
   // es6-promise-loader returns a function
];

// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
