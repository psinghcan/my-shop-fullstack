import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {FlexModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ListProductsComponent} from "./components/products/list-products/list-products.component";
import {ManageProductComponent} from "./components/products/manage-product/manage-product.component";
import {ListCategoriesComponent} from "./components/categories/list-categories/list-categories.component";
import {ManageCategoryComponent} from "./components/categories/manage-category/manage-category.component";
import {ListInvoicesComponent} from "./components/invoices/list-invoices/list-invoices.component";
import {ManageInvoiceComponent} from "./components/invoices/manage-invoice/manage-invoice.component";
import {HomeComponent} from "./components/home/home.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ListProductsComponent,
    ManageProductComponent,
    ListCategoriesComponent,
    ManageCategoryComponent,
    ListInvoicesComponent,
    ManageInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSnackBarModule,
    FlexModule,
    MatSlideToggleModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
