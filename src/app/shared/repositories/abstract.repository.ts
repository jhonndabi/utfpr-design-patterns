import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { MediaType } from './media-type';

const headers = {
  'Content-type': MediaType.APPLICATION_JSON,
  'Accept': MediaType.APPLICATION_JSON,
};

const params = {};

@Injectable()
export class AbstractRepository<T> {
  apiEndpoint: string;
  resource: string;
  headers: {} = headers;
  params: {} = params;

  constructor(
    protected http: HttpClient
  ) {
    this.setApiEndpoint(environment.apiEndpoint);
  }

  setApiEndpoint (apiEndpoint: string): void {
    this.apiEndpoint = apiEndpoint;
  }

  setResource(resource: string): void {
    this.resource = resource;
  }

  setPaginationParams (perPage: number = 2, page: number = 1, order: string = 'created_at', sort: string = 'DESC'): void {
    this.params['per_page'] = perPage.toString();
    this.params['page'] = page.toString();
    this.params['order'] = order;
    this.params['sort'] = sort;
  }

  get resourceEndpoint(): string {
    return `${this.apiEndpoint}/${this.resource}`;
  }

  get options(): {} {
    return {
      headers: new HttpHeaders(this.headers),
      params: new HttpParams({fromObject: this.params}),
    };
  }

  private transform(model: T) {
    return JSON.stringify(model);
  }

  findAll(order: string = 'created_at', sort: string = 'DESC'): Observable<T[]> {
    this.params['order'] = order;
    this.params['sort'] = sort;

    return this.http.get<T[]>(this.resourceEndpoint, this.options);
  }

  find(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.resourceEndpoint}/${id}`, this.options);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.resourceEndpoint, this.transform(entity), this.options);
  }

  update(id: number | string, entity: T): Observable<any> {
    return this.http.put(`${this.resourceEndpoint}/${id}`, this.transform(entity), this.options);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.resourceEndpoint}/${id}`, this.options);
  }
}
