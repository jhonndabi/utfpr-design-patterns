import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AbstractFormComponent } from '../../../shared/components/forms/abstract-form.component';
import { ProductRepository } from '../../../shared/repositories/product-repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends AbstractFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private productRepository: ProductRepository,
    private toast: ToastrService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  onCreation() {
    this.productRepository.create(this.form.value).subscribe(
      response => {
        this.router.navigate(['/products']);
        this.toast.success('The product was created successfully!');
      },
      error => {
        //
      },
      () => {
        //
      }
    );
  }


  onEdition() {
    this.productRepository.update(this.resourceId, this.form.value).subscribe(
      response => {
        this.router.navigate(['/products']);
        this.toast.success('The product was updated successfully!');
      },
      error => {
        //
      },
      () => {
        //
      }
    );
  }

  onFail() {
    this.toast.error('Invalid form data.');
  }
}
