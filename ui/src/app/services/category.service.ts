import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Category, NewCategory} from "../model/Category";
import {createRequestOption} from "../utils/request-util";
import {map, Observable} from "rxjs";

export type EntityArrayResponseType = HttpResponse<Category>
type RestOf<T extends Category | NewCategory> = Omit<T, 'dateAdded' | 'dateModified'> & {
  dateAdded?: string | null;
  dateModified?: string | null;
};
export type RestCategory = RestOf<Category>;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // add(data:any){
  //   return this.httpClient.post(this.url +"/category/add" , data,{
  //     headers: new HttpHeaders().set('Content-Type' , "application/json")
  //   })
  // }
  //
  // update(data:any){
  //   return this.httpClient.post(this.url +"/category/update" , data,{
  //     headers: new HttpHeaders().set('Content-Type' , "application/json")
  //   })
  // }
  //
  // getCategories(){
  //   return this.httpClient.get(this.url + "/category");
  // }
  //
  // getFilteredCategories(){
  //   return this.httpClient.get(this.url + "/category/get?filterValue=true");
  // }

  // getCategories(req?: any): Observable<EntityArrayResponseType> {
  //   const options = createRequestOption(req);
  //   return this.httpClient
  //     .get<RestCategory[]>(this.url, { params: options, observe: 'response' })
  //     .pipe(map(res => this.convertResponseArrayFromServer(res)));
  //
  // }
  //
  // protected convertResponseArrayFromServer(res: HttpResponse<RestCategory[]>): HttpResponse<Category[]> {
  //   return res.clone({
  //     body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
  //   });
  // }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/category/all`);
  }

  public getCategory(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.url}/category/${categoryId}`);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.url}/category`, category);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.url}/category`, category);
  }


}
