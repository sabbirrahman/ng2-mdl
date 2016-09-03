// Imports from @Angular
import { Component } from '@angular/core';

@Component({
  selector: 'mdl-text-field-page',
  template: require('./mdl-text-field-page.template.html')
})
export class MdlTextFieldPageComponent {
  email: string = '';
}
