import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.rooturl + '/api/product');
  }

  get(id: number) : Observable<Product>{
    return this.http.get<Product>(environment.rooturl + `/api/product/${id}`);
  }

  update(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(environment.rooturl + `/api/category/${id}`, product);
  }
}
