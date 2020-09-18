import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../services/merchant.service';
import { Post } from "../model/Post";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

posts;
  constructor(private service: MerchantService) { }
  ngOnInit(): void {
    this.service.getPosts().
    subscribe(response=>{
      console.log(this.posts = response);

    });
  }
  createPost(){}

}
