import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../model/Category";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit{
  dataSource:Category[] = [];
  errorMessage!: string;
  displayedColumns: string[] = ['id', 'name'];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.dataSource = categories;
        console.log(categories);
      },
      error: (error) => {
        this.errorMessage = error();
        console.error(error);
    }
    })
  }

  constructor(private categoryService: CategoryService) {
  }

}
