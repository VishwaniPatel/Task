import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.scss']
})
export class InbuiltPipeComponent implements OnInit {
  public data:any;
  public today:Date;

  constructor() { 

    this.data = {
      'id': 20,
      'name': {
        'firstname': 'Angular',
        'lastname': 'Pipes'
      }   
      
  }
  this.today = new Date();
  }

  ngOnInit(): void {
  }
  
};