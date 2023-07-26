import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {GlobalConstants} from "../../../../environments/global-constants";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../services/snackbar.service";
import {CategoryComponent} from "../category/category.component";

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit{
  constructor(private categoryService:CategoryService,
             private dialog:MatDialog,
             private snackbarService:SnackbarService,
             private router:Router) { }
  displayedColumns: string[] = ['name' , 'edit'];
  dataSource:any;
  responseMessage:any;

  ngOnInit(): void {
    this.tableData();
  }
  tableData() {
    this.categoryService.getCategories().subscribe((response:any)=>{
      this.dataSource = new MatTableDataSource(response);
    },(error:any)=>{
      console.log(error.error?.message);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction(){
    const dialogConfog = new MatDialogConfig();
    dialogConfog.data={
      action:'Add'
    };
    dialogConfog.width = "850px";
    const dialogRef = this.dialog.open(CategoryComponent , dialogConfog);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddCategory.subscribe((response)=>{
      this.tableData();
    })
  }
  handleEditAction(values:any){
    const dialogConfog = new MatDialogConfig();
    dialogConfog.data={
      action:'Edit',
      data:values
    };
    dialogConfog.width = "850px";
    const dialogRef = this.dialog.open(CategoryComponent , dialogConfog);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditCatefory.subscribe((response)=>{
      this.tableData();
    })
  }

}
