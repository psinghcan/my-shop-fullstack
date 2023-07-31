import { Component } from '@angular/core';
import {Invoice} from "../../models/Invoice";
import {InvoiceService} from "../../services/invoice.service";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrls: ['./manage-invoice.component.scss']
})
export class ManageInvoiceComponent {
  invoiceId:number= 0;
  invoice: Invoice = {} as Invoice;
  show: boolean = false;
  close() {
    this.show = true;
    setTimeout(() => (this.show = true), 3000);
  }

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.params['invoiceId'];
    this.initDetail();
  }

  initDetail() : void{
    this.invoiceService.get(this.invoiceId).subscribe(
      response => {
        console.log(response);
        this.invoice = response;
      }
    )
  }

  edit(invoice: Invoice) {
    console.log('category is edited; now submit the changes to the server');
    this.invoiceService.update(this.invoiceId, invoice).subscribe(
      data =>{
        if (data != null) {
          this.toastService.show('Invoice saved successfully', {
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
