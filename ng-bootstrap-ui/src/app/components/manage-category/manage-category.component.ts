import { Component } from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent {
  categoryId: number = 0;
  category: Category = {} as Category;
  show: boolean = false;
  close() {
    this.show = true;
    setTimeout(() => (this.show = true), 3000);
  }

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.initDetail();
  }

  initDetail() : void{
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      response => {
        console.log(response);
        this.category = response;
      }
    )
  }

  editCategory(category: any) {
    console.log('category is edited; now submit the changes to the server');
    this.categoryService.updateCategory(this.categoryId, category).subscribe(
      data =>{
        if (data != null) {
          this.toastService.show('Division saved successfully', {
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
