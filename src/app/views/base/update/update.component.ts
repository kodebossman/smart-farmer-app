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
merchant:any;
  
constructor(private service: MerchantService,private router:Router,private routeActive:ActivatedRoute) {
 
   }

  ngOnInit(): void {
    this.merchant=new Merchant();
this.id=this.routeActive.snapshot.params["id"];
this.service.findById(this.id)
.subscribe(data => {
  console.log(data);
  this.merchant = data.body;
}, error => console.log(error));

  }

  updateMerchant(){
    this.service.updateMerchant(this.id,this.merchant)
    .subscribe(data=>{
      console.log(data);
      this.merchant=new Merchant();
      this.router.navigate(["base/merchant"]);
  })
  }
}
