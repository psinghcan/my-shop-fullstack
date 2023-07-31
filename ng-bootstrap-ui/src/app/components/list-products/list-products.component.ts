import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  constructor(private productService: ProductService) {
  }
  displayedColumns: string[] = ["id", "name", "action"];
  products:Product[] = [] as Product[];

  ngOnInit(): void {
    this.initListProducts();
  }

  initListProducts(): void {
    this.productService.list().subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    )
  }

}
