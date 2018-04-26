import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../models/product';
import { ProductRepository } from '../../../shared/repositories/product-repository';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
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
