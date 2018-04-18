import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../../shared/repositories/product-repository';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Product[];

  constructor(private productRepository: ProductRepository) { }

  ngOnInit() {
    this.productRepository.findAll();
  }

}
