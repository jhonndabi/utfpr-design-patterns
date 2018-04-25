import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AbstractForm } from './abstract.form';

const controls = {
  name: new FormControl('', [Validators.required]),
  observation: new FormControl(''),
};

@Injectable()
export class ProductForm extends AbstractForm {
  constructor() {
    super(controls);
  }
}
