import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
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
