import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  public selectItem: string;
  public items: any;
  constructor() {
    this.selectItem="";
   }
  
  ngOnInit(): void {
    this.items = [
      { id: 1, name: 'success' },
      { id: 2, name: 'info' },
      { id: 3, name: 'warning' },
      { id: 4, name: 'danger' },
      { id: 5, name: 'other' }

    ]
  }
}
