import { Component } from '@angular/core';
import {InvoiceService} from "../../services/invoice.service";
import {Invoice} from "../../models/Invoice";

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.scss']
})
export class ListInvoicesComponent {
  constructor(private invoiceService: InvoiceService) {
  }
  displayedColumns: string[] = ["id", "name", "action"];
  invoices:Invoice[] = [] as Invoice[];

  ngOnInit(): void {
    this.initList();
  }

  initList(): void {
    this.invoiceService.list().subscribe(
      response => {
        console.log(response);
        this.invoices = response;
      }
    )
  }
}
