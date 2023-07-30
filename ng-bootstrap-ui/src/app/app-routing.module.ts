import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ListCategoriesComponent} from "./components/list-categories/list-categories.component";
import {ManageCategoryComponent} from "./components/manage-category/manage-category.component";
import {ListProductsComponent} from "./components/list-products/list-products.component";
import {ManageProductComponent} from "./components/manage-product/manage-product.component";
import {ListInvoicesComponent} from "./components/list-invoices/list-invoices.component";
import {ManageInvoiceComponent} from "./components/manage-invoice/manage-invoice.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'list-categories', component: ListCategoriesComponent},
  { path: 'manage-category/:categoryId', component: ManageCategoryComponent},
  { path: 'list-products', component: ListProductsComponent},
  { path: 'manage-product/:productId', component: ManageProductComponent},
  { path: 'list-invoices', component: ListInvoicesComponent},
  { path: 'manage-invoice/:regionId', component: ManageInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
