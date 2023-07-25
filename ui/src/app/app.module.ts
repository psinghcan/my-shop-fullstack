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
import {InputComponent} from "./input/input.component";
import {AutocompleteComponent} from "./component/autocomplete/autocomplete.component";
import {MenubarComponent} from "./component/menubar/menubar.component";
import {HomeComponent} from "./component/home/home.component";
import {CardComponent} from "./component/card/card.component";
import {SliderComponent} from "./component/slider/slider.component";
import {TableComponent} from "./component/table/table.component";
import {FormdesignComponent} from "./component/formdesign/formdesign.component";
import {PopupComponent} from "./component/popup/popup.component";
import {AssociateComponent} from "./component/associate/associate.component";
import {UserdetailComponent} from "./component/userdetail/userdetail.component";
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
import { ProductComponent } from './component/product/product/product.component';
import { ManageProductComponent } from './component/product/manage-product/manage-product.component';
import { CategoryComponent } from './component/category/category/category.component';
import { ManageCategoryComponent } from './component/category/manage-category/manage-category.component';
import { InvoiceComponent } from './component/invoice/invoice/invoice.component';
import { ManageInvoiceComponent } from './component/invoice/manage-invoice/manage-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent,
    UserdetailComponent,
    ProductComponent,
    ManageProductComponent,
    CategoryComponent,
    ManageCategoryComponent,
    InvoiceComponent,
    ManageInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
