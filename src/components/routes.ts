// Router Components
import {DashboardComponent}        from './router-components/dashboard/Dashboard.component';
import {MdlUpgradePageComponent}   from './router-components/mdl-upgrade-page/mdl-upgrade-page.component';
import {MdlTextFieldPageComponent} from './router-components/mdl-text-field-page/mdl-text-field-page.component';
import {MdlCheckBoxPageComponent}  from './router-components/mdl-check-box-page/mdl-check-box-page.component';
import {MdlRadioPageComponent}     from './router-components/mdl-radio-page/mdl-radio-page.component';
import {MdlSwitchPageComponent}    from './router-components/mdl-switch-page/mdl-switch-page.component';
import {MdlButtonPageComponent}    from './router-components/mdl-button-page/mdl-button-page.component';
import {MdlProgressPageComponent}  from './router-components/mdl-progress-page/mdl-progress-page.component';

export let Routes = [
  { path: '/',               component: DashboardComponent,        as: 'Dashboard'        },
  { path: '/mdl-upgrade',    component: MdlUpgradePageComponent,   as: 'MdlUpgradePage'   },
  { path: '/mdl-text-field', component: MdlTextFieldPageComponent, as: 'MdlTextFieldPage' },
  { path: '/mdl-check-box',  component: MdlCheckBoxPageComponent,  as: 'MdlCheckBoxPage'  },
  { path: '/mdl-radio',      component: MdlRadioPageComponent,     as: 'MdlRadioPage'     },
  { path: '/mdl-switch',     component: MdlSwitchPageComponent,    as: 'MdlSwitchPage'    },
  { path: '/mdl-button',     component: MdlButtonPageComponent,    as: 'MdlButtonPage'    },
  { path: '/mdl-progress',   component: MdlProgressPageComponent,  as: 'MdlProgressPage'  }
];
