import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public fetchdata: any;
  @Input() userlist: any;
  @Output() displaydata: EventEmitter<any>;
  @Output() empdetails: EventEmitter<any>;
  

  public editdata:any;
  constructor(
    private route:Router,
    private activateroute: ActivatedRoute

  ) { 
    this.displaydata = new EventEmitter();
    this.empdetails= new EventEmitter();
    this.fetchdata = {};
  }

  ngOnInit(): void {
  }

  // onDetails(employee : any)
  // {
  //   this.empdetails.emit(employee);
    
  // }
  onEdit(emp : any){
    this.fetchdata= emp;
    // console.log(this.fetchdata);
    this.displaydata.emit(this.fetchdata);
  }
 onDelete(j: any){
    this.userlist.splice(j,1);
  }
 }
