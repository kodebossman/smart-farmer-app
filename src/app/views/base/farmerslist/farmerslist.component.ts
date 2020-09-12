import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';
import {FarmerServiceService} from '../services/farmer-service.service';

@Component({
  selector: 'app-farmerslist',
  templateUrl: './farmerslist.component.html',
  styleUrls: ['./farmerslist.component.css']
})
export class FarmerslistComponent implements OnInit {
  todos:Todo[];
  constructor(private farmerService:FarmerServiceService) { 
    
  }
 
  ngOnInit(): void {
    this.farmerService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
