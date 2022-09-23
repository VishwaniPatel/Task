import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  addresType: string;
  constructor() {
    this.addresType = '';
   }

  ngOnInit(): void {
  }

  title = 'child-parent-interaction';
  
  addressChangeEventHandler($event: any) {
    this.addresType = $event;
  }
}
