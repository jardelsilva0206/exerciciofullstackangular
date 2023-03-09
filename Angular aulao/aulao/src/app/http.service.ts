import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
    
  ) { }
  private url:string = "teste"
  getByIdRequest(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  postRequest(todos: string): Observable<any> {
    return this.http.post(`${this.url}/add`, todos).pipe(
      catchError(this.handleError));
  }
  updateRequest(todos: string): Observable<any> {
    return this.http.put(`${this.url}/update`, todos).pipe(
      catchError(this.handleError));
  }
  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`).pipe(
      catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro: '+error.error.message)
    }else{
      console.error(
        `Backend returned code ${error.status}, `+
        `body was: ${error.error}`
      )
    }
    return throwError(()=> new Error('Somenthin bad happened; please try again later.'))
    }
  }


