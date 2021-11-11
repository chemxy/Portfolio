import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: "exampleTitle",
      type: "personal projetc",
      date: "2021",
      description: "sample"
    },
    {
      title: "exampleTitle",
      type: "personal projetc",
      date: "2020",
      description: "sample"
    },
    {
      title: "exampleTitle",
      type: "personal projetc",
      date: "2019",
      description: "sample"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
