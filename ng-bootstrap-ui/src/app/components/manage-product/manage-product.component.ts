import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit{
  productId: number = 0;
  product: Product = {} as Product;
  categoryName!: string;
  show: boolean = false;
  close() {
    this.show = true;
    setTimeout(() => (this.show = true), 3000);
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.initDetail();
  }

  initDetail() : void{
    this.productService.get(this.productId).subscribe(
      response => {
        console.log(response);
        this.product = response;
        this.categoryName = this.product.category.name;
      }
    )
  }

  edit(product: any) {
    console.log('product is edited; now submit the changes to the server');
    this.productService.update(this.productId, product).subscribe(
      data =>{
        if (data != null) {
          this.toastService.show('Product saved successfully', {
            delay: 2000,
            autohide: true
          });
        } else {
          this.toastService.show('Some error occurred', {
            delay: 2000,
            autohide: true
          });
        }
      }
    )
  }


}
