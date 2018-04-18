import { Observable } from 'rxjs/Observable';

export interface CrudRepository<T> {
  findAll(): Observable<T[]>;
  find(id: any): Observable<T>;
  create(model: T): Observable<T>;
  update(model: T, id: any): Observable<T>;
  remove(id: any): Observable<any>;
}
