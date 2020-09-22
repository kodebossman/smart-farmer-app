import { Component, OnInit } from '@angular/core';

import {FarmerServiceService} from '../services/farmer-service.service';
import { Farmer } from '../model/Farmer';

@Component({
  selector: 'app-farmerslist',
  templateUrl: './farmerslist.component.html',
  styleUrls: ['./farmerslist.component.css']
})
export class FarmerslistComponent implements OnInit {
  farmers:Farmer[];
  constructor(private farmerService:FarmerServiceService) { 
    
  }
 
  ngOnInit(): void {
    this.farmerService.getTodos().subscribe((farmer) => {
      this.farmers = farmer;
      console.log(farmer)
         });
  }

  
    

 

}
