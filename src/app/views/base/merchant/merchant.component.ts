import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { Merchant} from "../model/Merchant";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

merchants:Merchant[];
  constructor(private service: MerchantService) { }
  ngOnInit(): void {
    this.service.getMerchant().
    subscribe(response=>{
      console.log(this.merchants = response);

    });
  }
  createPost(){}

}
