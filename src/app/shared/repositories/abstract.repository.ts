import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CrudRepository } from './crud-repository.interface';
import { environment } from '../../../environments/environment';
import { MediaType } from './media-type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': MediaType.APPLICATION_JSON,
    'Accept': MediaType.APPLICATION_JSON
  })
};

@Injectable()
export class AbstractRepository<T> implements CrudRepository<T> {
  private url;

  constructor(
    private http: HttpClient,
    private resource: string
  ) {
    this.url = `${environment.apiEndpoint}/${resource}`;
  }

  private transform(model: T) {
    return JSON.stringify(model);
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url, httpOptions);
  }

  find(id: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`, httpOptions);
  }

  create(model: T): Observable<T> {
    return this.http.post<T>(this.url, this.transform(model), httpOptions);
  }

  update(model: T, id: any): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, this.transform(model), httpOptions);
  }

  remove(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
