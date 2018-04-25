import { FormControl, FormGroup } from '@angular/forms';

export abstract class AbstractForm extends FormGroup {

  verifyFormValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(element => {
      const control = formGroup.get(element);
      control.markAsDirty();

      if (control instanceof FormGroup) {
        return this.verifyFormValidation(control);
      }
    });
  }

  formValidation() {
    this.verifyFormValidation(this);
  }

  isInvalidAndTouched(field: FormControl) {
    return field.invalid && field.touched;
  }

  applyCssError(field: FormControl) {
    return {
      'has-error': this.isInvalidAndTouched(field)
    };
  }
}
