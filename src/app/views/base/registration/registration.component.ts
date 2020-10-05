import { Component, OnInit } from '@angular/core';
import { Merchant } from "../model/Merchant";
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  merchant: Merchant= new Merchant();
  message:any;
  
  constructor(private service: MerchantService) { }

  ngOnInit(): void {
  }


  public registerNow(){
    let resp = this.service.createMerchant(this.merchant);
    resp.subscribe((data)=>this.message=data);
  }
}
