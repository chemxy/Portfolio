import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: { title: string, githubLink: string, technologies: string[], type: string, startDate: string, endDate: string, description: string[] };

  constructor () { }

  ngOnInit(): void {
  }

}
