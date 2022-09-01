import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: "Vega",
      type: "Course Project: SENG426",
      githubLink: 'https://github.com/chemxy/vega',
      startDate: 'May 2022',
      endDate: "Aug 2022",
      technologies: ['javascript', 'java', 'html', 'css'],
      description:
        [
          'Worked on an application built with React, ExpressJS and Spring boot.',
          'Led a small-size team in project planning, development and project reporting.',
          'Added 2+ features and functionalities.',
          'Identified and fixed 5 + bugs and vulnerabilities',
          'Experience in performance testing and stress testing using JMeter.',
          'Experience in security testing using SonarQube.',
        ]
    },
    {
      title: "Onboarding-Genie",
      type: "Course Project: SENG499",
      githubLink: '',
      startDate: 'May 2021',
      endDate: "Aug 2021",
      technologies: ['javascript', 'php', 'html', 'css'],
      description:
        [
          'Collaboratively designed and developed a booking system in React and PHP with a cross-functional team of 13 members.',
          'Developed 5+ React pages and a complete backend API as a team.',
          'Built Github Actions to automate the build pipeline.',
          'Led researches in testing with Jest and Cucumber. Created 10+ test cases.',
        ]
    },
    {
      title: "Address Visualizer",
      type: "External Project from China Post",
      githubLink: 'https://github.com/chemxy/AddressVisualizer',
      startDate: 'Jan 2021',
      endDate: "May 2021",
      technologies: ['javascript', 'html', 'css'],
      description:
        [
          'Designed and developed a web application to visualize massive addresses on a map.',
          'Leveraged AMap API to convert addresses from plain text to geographical data.',
          'Deployed and packaged in a bat file to run from Windows OS.'
        ]
    },
    {
      title: "personal website",
      type: "personal project",
      startDate: 'May 2020',
      endDate: "Sep 2022",
      githubLink: '',
      technologies: ['typescript', 'html', 'css'],
      description:
        [
          'Designed and built a personal website that contains the general profile, projects, work experience and contact information.',
          'Developed and implemented using web technologies including HTML and CSS/bootstrap 4 for front-end designs, and ExpressJS and NodeJS for back-end supports.',
          'AngularJS to be added to support more user interactions.'
        ]
    },
    {
      title: "Game: Maze Runner",
      type: "personal project",
      startDate: 'May 2020',
      endDate: "Jun 2020",
      technologies: ['python'],
      githubLink: '',
      description: [
        'A Python game that requires the player to find a path to the exit and avoid enemies along the way. Implemented AI agents to simulate players and enemies to make decisions. Utilized the game with Python classNamees such as pygame, time and random for the game engine and rendering of pictures and animations.'
      ]
    },
    {
      title: "Data Mining: A Predictor for Heart Disease",
      type: "Course project: SENG474",
      startDate: 'Sep 2019',
      endDate: "Dec 2019",
      technologies: ['python'],
      githubLink: '',
      description: [
        'A program written in Python that predicts the likelihood of having heart disease based on the analysis of patient statistics. Implemented with logistic regression classNameification model and decision tree classNameification model. Pre-processed the raw data using data normalization and visualized the data using boxplot.'
      ]
    },
    {
      title: "Requirements Engineering",
      type: "Course project: SENG321",
      startDate: 'Sep 2019',
      endDate: "Dec 2019",
      technologies: [],
      githubLink: '',
      description: [
        'Experienced Agile development process. As client, designed a proposal (RFP) for Warrantied Product Tracking System. As designer, designed a solution report for Disaster Continuity Planning System. Main development processes include information gathering, requirements (RD), specifications (RSD), use cases, UML diagrams, low-high fidelity prototypes.'
      ]
    },
    {
      title: "Software Architecture Analysis",
      type: "Course project: SENG480A",
      startDate: 'Sep 2019',
      endDate: "Dec 2019",
      technologies: [],
      githubLink: '',
      description: [
        'Analyzed and documented the architecture of ClusterFuzz, an open-source application developed by Google. Main technologies include identifying possible stakeholders and business goals, privacy and ethics report, architecturally significant requirements, module views, code quality and technical debt report.'
      ]
    },
  ];


  constructor () { }

  ngOnInit(): void {
  }

}
