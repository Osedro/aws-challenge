import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  readonly url: string= 'http://localhost:3080'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categoryread`);
  }

  createCategory(name: String): Observable<Category[]> {
    return this.http.post<Category[]>(`${this.url}/categorycreate`, {name});
  }

  delCategory(id: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categorydelete/${id}`);
  }
}
