import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class AbstractFormComponent {
  form: FormGroup;
  private _resource: {};
  private _resourceId: number | string = null;

  @Input() set resource(resource: {}) {
    this._resource = resource;

    setTimeout(() => this.form.patchValue(this._resource));
  }

  @Input() set resourceId(resourceId: number | string) {
    this._resourceId = resourceId;
  }

  get resourceId(): number | string {
    return this._resourceId;
  }

  abstract createForm(): FormGroup;
  abstract onCreation(): void;
  abstract onEdition(): void;
  abstract onFail(): void;

  onSubmit(): void {
    if (this.form.invalid) {
      this.verifyFormValidation(this.form);
      this.onFail();
      return;
    }

    this.resourceId ? this.onEdition() : this.onCreation();
  }

  verifyFormValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(element => {
      const control = formGroup.get(element);
      control.markAsDirty();

      if (control instanceof FormGroup) {
        return this.verifyFormValidation(control);
      }
    });
  }

  isInvalidAndTouched(fieldName: string) {
    const field = this.form.get(fieldName);
    return field.invalid && field.touched;
  }

  applyCssError(fieldName: string) {
    return {
      'has-error': this.isInvalidAndTouched(fieldName)
    };
  }

  isInvalidAndEmpty(fieldName: string) {
    return this.isInvalidAndTouched(fieldName) && ! this.form.get(fieldName).value;
  }

}
