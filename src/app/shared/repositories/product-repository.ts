import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractRepository } from './abstract.repository';
import { Product } from '../../models/product';

const resource: string = 'products';

@Injectable()
export class ProductRepository extends AbstractRepository<Product> {

  constructor(http: HttpClient) {
    super(http, resource);
  }

}