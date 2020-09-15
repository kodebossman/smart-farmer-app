import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  posts: any[];
  constructor(private contract: ContractService) { }

  ngOnInit(): void {
    this.contract.getPosts().
    subscribe(response=>{
      this.posts =response;
      console.log(this.posts =response);
    });
  }



}
