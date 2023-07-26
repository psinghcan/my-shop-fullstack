import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {InvoiceService} from "../../../services/invoice.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {GlobalConstants} from "../../../../environments/global-constants";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'paymentMethod', 'total', 'view'];
  dataSource: any;
  responseMessage: any;

  constructor(private invoiceService: InvoiceService,
              private dialog: MatDialog,
              private snackbarService: SnackbarService,
              private router: Router) { }

  ngOnInit(): void {
    this.tableData();
  }
  tableData() {
    this.invoiceService.getAllInvoice().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
    }, (error: any) => {
      console.log(error.error?.message);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleViewAction(values: any) {
    const dialogConfog = new MatDialogConfig();
    dialogConfog.data = {
      data: values
    };
    dialogConfog.width = "100%";
    const dialogRef = this.dialog.open(InvoiceComponent, dialogConfog);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });

  }


}
