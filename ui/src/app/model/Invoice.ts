export interface Invoice {
  id: number;
  uuid: string;
  contactNumber: string;
  createdBy: string
  name: string
  email: string;
  paymentMethod: string;
  productDetail: string;
  totalAmount: number
}

export type NewInvoice = Omit<Invoice, 'id'> & {id: null}
