// Imports from @angular
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// ng2-mdl Components
import { MdlTextFieldComponent } from './mdl-text-field.component';
import { MdlCheckBoxComponent } from './mdl-check-box.component';
import { MdlProgressComponent } from './mdl-progress.component';
import { MdlSpinnerComponent } from './mdl-spinner.component';
import { MdlLayoutComponent } from './mdl-layout.component';
import { MdlHeaderComponent } from './mdl-layout.component';
import { MdlDrawerComponent } from './mdl-layout.component';
import { MdlButtonComponent } from './mdl-button.component';
import { MdlSelectComponent } from './mdl-select.component';
import { MdlSwitchComponent } from './mdl-switch.component';
import { MdlRadioComponent } from './mdl-radio.component';
import { MdlDirective } from './mdl.directive';

export const NG2MDL_DIRECTIVES = [
  MdlTextFieldComponent,
  MdlCheckBoxComponent,
  MdlProgressComponent,
  MdlSpinnerComponent,
  MdlLayoutComponent,
  MdlHeaderComponent,
  MdlDrawerComponent,
  MdlButtonComponent,
  MdlSelectComponent,
  MdlSwitchComponent,
  MdlRadioComponent,
  MdlDirective
];

@NgModule({
  declarations: [
    ...NG2MDL_DIRECTIVES
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ...NG2MDL_DIRECTIVES
  ]
})
export class Ng2MdlModule {}
