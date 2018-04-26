import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ProductRepository } from '../../../shared/repositories/product-repository';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productRepository: ProductRepository,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productRepository.findAll().subscribe(
      products => {
        this.products = products;
      },
      error => {
        //
      },
      () => {
        //
      }
    );
  }

  delete(id: number) {
    this.productRepository.delete(id).subscribe(
      response => {
        this.toast.success('The product was deleted!');
      },
      error => {
        this.toast.success('Ops, something went wrong. Try again later!');
      },
      () => {
        //
      }
    );
  }

}
