import { ActivatedRoute, Router } from '@angular/router';
import { MerchantService } from './../services/merchant.service';
import { Merchant } from './../model/Merchant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id: number;
merchant:Merchant= new Merchant();
  
constructor(private service: MerchantService,private router:Router,private routeActive:ActivatedRoute) {
 
   }

  ngOnInit(): void {
this.id=this.routeActive.snapshot.params["id"];
this.service.findByName(this.id).subscribe((merchants)=>{merchants=this.merchant});
  }

  updateMerchant(){
    this.service.updateMerchant(this.id,this.merchant).subscribe(merchants=>{this.router.navigate(["base/merchant"]);
  console.log(merchants)})
  }
}
