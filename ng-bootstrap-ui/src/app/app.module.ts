import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';
import { ManageInvoiceComponent } from './components/manage-invoice/manage-invoice.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListCategoriesComponent,
    ListInvoicesComponent,
    ManageInvoiceComponent,
    ManageCategoryComponent,
    ManageProductComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
