import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit{
  constructor(private categoryService: CategoryService) {
  }
  displayedColumns: string[] = ["id", "name", "action"];
  categories:any = [] as Category[];

  ngOnInit(): void {
    this.initListCategories();
  }

  initListCategories(): void {
    this.categoryService.getListCategories().subscribe(
      response => {
        console.log(response);
        this.categories = response;
      }
    )
  }
}
