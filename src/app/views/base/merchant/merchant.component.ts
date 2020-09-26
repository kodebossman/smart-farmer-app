import { Post } from './../model/Post';
import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { Merchant } from "../model/Merchant";
import { Observable } from "rxjs";


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

merchants:any;

  constructor(private service: MerchantService) { }
  ngOnInit():void {
    this.service.getMerchant().subscribe(merchants => {
      this.merchants = merchants;
    });
    
  }
public deleMerchant(id: number){
  let res=this.service.deleteMerchant(id);
  res.subscribe((merchants)=>this.merchants=merchants);


}
 
  
}
