import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  imageLink: string = "./assets/images/IMG_1033.JPG";

  constructor() { }

  ngOnInit(): void {
  }

}
