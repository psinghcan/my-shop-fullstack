import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import {ManageCategoryComponent} from "./component/category/manage-category/manage-category.component";
import {ManageInvoiceComponent} from "./component/invoice/manage-invoice/manage-invoice.component";
import {ManageProductComponent} from "./component/product/manage-product/manage-product.component";
import {CategoryComponent} from "./component/category/category/category.component";
import {ProductComponent} from "./component/product/product/product.component";
import {InvoiceComponent} from "./component/invoice/invoice/invoice.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'card',component:CardComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'associate',component:AssociateComponent},
  {path:'categories',component:ManageCategoryComponent},
  {path:'category/:id',component:CategoryComponent},
  {path:'products',component:ManageProductComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'invoices',component:ManageInvoiceComponent},
  {path:'invoice/:id',component:InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
