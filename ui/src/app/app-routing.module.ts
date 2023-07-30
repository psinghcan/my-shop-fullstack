import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCategoryComponent} from "./components/categories/manage-category/manage-category.component";
import {ManageProductComponent} from "./components/products/manage-product/manage-product.component";
import {ManageInvoiceComponent} from "./components/invoices/manage-invoice/manage-invoice.component";
import {ListCategoriesComponent} from "./components/categories/list-categories/list-categories.component";
import {ListProductsComponent} from "./components/products/list-products/list-products.component";
import {ListInvoicesComponent} from "./components/invoices/list-invoices/list-invoices.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:ListCategoriesComponent},
  {path:'category/:id',component:ManageCategoryComponent},
  {path:'products',component:ListProductsComponent},
  {path:'product/:id',component:ManageProductComponent},
  {path:'invoices',component:ListInvoicesComponent},
  {path:'invoice/:id',component:ManageInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
