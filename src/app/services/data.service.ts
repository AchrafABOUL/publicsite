import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected url : string = '';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }
  create(resource: any) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }
  delete(id: string) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    if (error.status === 404) {
      throw new NotFoundError();
    } else if (error.status === 400) {
      throw new BadInputError(error);
    } else {
      throw new AppError(error);
    }
    return of(0);
  }
}
