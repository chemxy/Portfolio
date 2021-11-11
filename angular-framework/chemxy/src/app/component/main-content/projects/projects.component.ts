import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: "personal website",
      type: "personal project",
      date: "2021",
      description: "Designed and built a personal website that contains the general profile, projects, work experience and contact information. Developed and implemented using web technologies including HTML and CSS/bootstrap 4 for front-end designs, and ExpressJS and NodeJS for back-end supports. AngularJS to be added to support more user interactions."
    },
    {
      title: "Maze Runner",
      type: "personal project",
      date: "2020",
      description: "A Python game that requires the player to find a path to the exit and avoid enemies along the way. Implemented AI agents to simulate players and enemies to make decisions. Utilized the game with Python classNamees such as pygame, time and random for the game engine and rendering of pictures and animations."
    },
    {
      title: "Data Mining: A Predictor for Heart Disease",
      type: "Course project - SENG474",
      date: "2019",
      description: "A program written in Python that predicts the likelihood of having heart disease based on the analysis of patient statistics. Implemented with logistic regression classNameification model and decision tree classNameification model. Pre-processed the raw data using data normalization and visualized the data using boxplot."
    },
    {
      title: "Requirements Engineering",
      type: "Course project - SENG321",
      date: "2019",
      description: "Experienced Agile development process. As client, designed a proposal (RFP) for Warrantied Product Tracking System. As designer, designed a solution report for Disaster Continuity Planning System. Main development processes include information gathering, requirements (RD), specifications (RSD), use cases, UML diagrams, low-high fidelity prototypes."
    },
    {
      title: "Software Architecture Analysis",
      type: "Course project - SENG480A",
      date: "2019",
      description: "Analyzed and documented the architecture of ClusterFuzz, an open-source application developed by Google. Main technologies include identifying possible stakeholders and business goals, privacy and ethics report, architecturally significant requirements, module views, code quality and technical debt report."    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
