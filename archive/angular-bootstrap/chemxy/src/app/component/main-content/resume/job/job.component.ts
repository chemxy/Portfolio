import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input()
  job!: { title: string; company: string; location: string; duration: string; description: string; };


  constructor() { }

  ngOnInit(): void {
  }

}
