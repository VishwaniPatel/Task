import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  selectedAddressType: string;
  @Output() selectedAddress : EventEmitter<string>;

  constructor() { 
    this.selectedAddressType ='';
    this.selectedAddress = new EventEmitter()
  }

  ngOnInit(): void {
  }
  onAddressTypeChange() {
    this.selectedAddress.emit(this.selectedAddressType);
  }
}
