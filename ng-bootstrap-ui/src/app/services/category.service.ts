import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getListCategories(){
    return this.http.get(environment.rooturl + '/api/category');
  }

  getCategoryById(categoryId: number){
    return this.http.get(environment.rooturl + `/api/category/${categoryId}`);
  }

  updateCategory(categoryId: number, category: Category){
    return this.http.put(environment.rooturl + `/api/category/${categoryId}`, category);
  }
}
