import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail
  list: PaymentDetail[];

  readonly rootURL = 'http://localhost:9360/api'
  
  constructor(private http:HttpClient) { }

  postPaymentDetail(formData:PaymentDetail){
    return this.http.post(this.rootURL + '/paymentDetails', formData);
  }

  refreshList(){
    this.http.get(this.rootURL + '/paymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }
}
