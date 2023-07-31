import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Category} from "../models/Category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getListCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.rooturl + '/api/category');
  }

  getCategoryById(categoryId: number) : Observable<Category>{
    return this.http.get<Category>(environment.rooturl + `/api/category/${categoryId}`);
  }

  updateCategory(categoryId: number, category: Category): Observable<Category>{
    return this.http.put<Category>(environment.rooturl + `/api/category/${categoryId}`, category);
  }
}
