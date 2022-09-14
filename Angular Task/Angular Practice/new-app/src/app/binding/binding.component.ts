import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  
  public text:string;
  public firstname:string;
  public colspan:number;
  public tableData:any;
  public data1:string;

  constructor() {
    this.text="Hello World";
    this.firstname="Vishwani"
    this.colspan=2;
    this.tableData = {fname:"Vishwani",lastName:"Patel",gender:"Female",qualification:"Graduate"};
    this.data1 = "";
  }
  ngOnInit(): void {
    
  }

  onClick() {
    alert("Hello");
  }

}
