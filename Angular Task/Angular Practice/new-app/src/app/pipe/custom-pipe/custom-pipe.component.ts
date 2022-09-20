import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  Person_Details: any[] = [
    {
      Id:1,
      Name: "Vishwani",
      Gender: "F"
    },
    {
      Id:2,
      Name: "Parimal",
      Gender: "M"
    },
    {
      Id:3,
      Name: "Bhakti",
      Gender: "F"
    },
    {
      Id:4,
      Name: "Nilay",
      Gender: "M"
    },
    {
      Id:5,
      Name: "Rajan",
      Gender: "M"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
