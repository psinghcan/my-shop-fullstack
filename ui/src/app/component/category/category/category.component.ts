import { Component, Inject, EventEmitter ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {SnackbarService} from "../../../services/snackbar.service";
import {CategoryService} from "../../../services/category.service";
import {GlobalConstants} from "../../../../environments/global-constants";
import {Category} from "../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  onAddCategory = new EventEmitter();
  onEditCatefory = new EventEmitter();
  categoryForm:any = FormGroup;
  dialogAction:any = "Add";
  action:any = "Add";

  public categories: Category[] | undefined;
  public editCategory: Category | undefined;


  responseMessage:any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
              private formBulider:FormBuilder,
              protected categoryService:CategoryService,
              public dialogRef: MatDialogRef<CategoryComponent>,
              private snackbarService:SnackbarService
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBulider.group({
      name:[null,[Validators.required]]
    });
    if(this.dialogData.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action = "Update";
      this.categoryForm.patchValue(this.dialogData.data);
    }
    this.getCategories();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  handleSubmit(){
    if(this.dialogAction === "Edit"){
      this.edit();
    }else{
      this.add();
    }
  }

  add() {
    let formData = this.categoryForm.value;
    this.categoryService.addCategory(formData.value).subscribe(
      (response: Category) => {
        console.log(response);
        this.getCategories();
        this.categoryForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.categoryForm.reset();
      }
    );
  }

  // add() {
  //   var formData = this.categoryForm.value;
  //   var data = {
  //     name: formData.name
  //   }
  //   this.categoryService.add(data).subscribe((response:any)=>{
  //     this.dialogRef.close();
  //     this.onAddCategory.emit();
  //     this.responseMessage = response.message;
  //     alert("Successfully Add Category");
  //     this.snackbarService.openSnackBar(this.responseMessage , "success");
  //   },(error)=>{
  //     this.dialogRef.close();
  //     console.error(error);
  //     if(error.error?.message){
  //       this.responseMessage = error.error?.message;
  //     }else{
  //       this.responseMessage = GlobalConstants.genericError;
  //     }
  //     alert(this.responseMessage +" " +GlobalConstants.error);
  //     this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
  //   });
  // }
  edit() {
    var formData = this.categoryForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name
    }
    this.categoryService.updateCategory(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onEditCatefory.emit();
      this.responseMessage = response.message;
      alert("Successfully Update Category");
      this.snackbarService.openSnackBar(this.responseMessage , "success");
    },(error)=>{
      this.dialogRef.close();
      console.error(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      alert(this.responseMessage +" " +GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    });
  }
}
