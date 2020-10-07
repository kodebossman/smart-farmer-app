import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { Merchant } from '../model/Merchant';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

merchants:Observable<Merchant[]>;
id:number;

  constructor(private service: MerchantService,private router:Router) { }
  ngOnInit():void {
    this.service.getMerchant().subscribe(data => {
      this.merchants = data;
    });
    
  }

  public deleMerchant(id: number){
  let res=this.service.deleteMerchant(id);
  res.subscribe(data=>{
    console.log(data)
    this.merchants=this.service.getMerchant();
  });
}

public findMerchant(id:number){

  let res=this.service.findById(id);
  res.subscribe(data=>{this.merchants=data;
  console.log(data)});
}
 public updateMerchant(id: number){
   return this.router.navigate(["base/update",id]);
 }
  
}
