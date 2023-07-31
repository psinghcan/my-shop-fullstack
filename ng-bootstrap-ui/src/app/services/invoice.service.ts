import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Invoice} from "../models/Invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  list(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(environment.rooturl + '/api/invoice');
  }

  get(id: number) : Observable<Invoice>{
    return this.http.get<Invoice>(environment.rooturl + `/api/invoice/${id}`);
  }

  update(id: number, invoice: Invoice): Observable<Invoice>{
    return this.http.put<Invoice>(environment.rooturl + `/api/invoice/${id}`, invoice);
  }
}
