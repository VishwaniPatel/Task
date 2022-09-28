import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public subject = new Subject();
  // public subject = new BehaviorSubject(0);
  // public subject = new ReplaySubject(3);
  public subject = new AsyncSubject;
  public observer1: any;
  public observer2: any;
  // public a: number = 5;
  // public b: number = 6;

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.observer1 = this.subject.subscribe( {
      next: (v) => {
        console.log("Next: " + v);
      },
      error:(v) => {
        console.log("Error " + v);
        
      },
      complete: () => {
        console.log("Complete");
        
      }
    })
    this.subject.next(1);
    this.subject.next(2);
    this.subject.complete();
    this.subject.next(3);
    this.subject.next(4); 
    this.observer2 = this.subject.subscribe( {
      next: (v) => {
        console.log("Second Next: " + v);
      }
    })
    this.subject.next(5);
    this.subject.next(6); 

  //   if(this.a == this.b){
  //     this.subject.next(1);
  //   }
  //   else{
  //     this.subject.error("occured");
  //   }
  // }
  }

  

}
