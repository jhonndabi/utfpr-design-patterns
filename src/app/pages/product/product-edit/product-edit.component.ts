import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductRepository } from '../../../shared/repositories/product-repository';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  product: Product;
  private routeSubscription;

  constructor(
    private productRepository: ProductRepository,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.loadProduct(id);
    });
  }

  private loadProduct(id: number) {
    this.productRepository.find(id).subscribe(
      product => {
        this.product = product;
      },
      error => {
        //
      },
      () => {
        //
      }
    );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
