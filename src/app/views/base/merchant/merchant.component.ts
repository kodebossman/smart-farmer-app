import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

merchants:any;
id:number;

  constructor(private service: MerchantService,private router:Router) { }
  ngOnInit():void {
    this.service.getMerchant().subscribe(merchants => {
      this.merchants = merchants;
    });
    
  }

  public deleMerchant(id: number){
  let res=this.service.deleteMerchant(id);
  res.subscribe(merchants=>{
    console.log(merchants);
    this.service.getMerchant();
  });
}

public findMerchant(id){
  let res=this.service.findByName(id);
  res.subscribe((merchants)=>this.merchants=merchants);
}
 public updateMerchant(id: number){
   return this.router.navigate(["base/update",id]);
 }
  
}
