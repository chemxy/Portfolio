import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stacks',
  templateUrl: './tech-stacks.component.html',
  styleUrls: ['./tech-stacks.component.css']
})
export class TechStacksComponent implements OnInit {

  webChips = ['Angular', 'spring boot', 'WebSphere Liberty',
    'Bootstrap', 'Material', 'HTML', 'CSS',
    'NodeJS', 'ExpressJS', 'React', 'REST'
  ];

  dbChips = ['DB2', 'MongoDB', 'SQL'];

  languageChips = ['Java', 'Python', 'C', 'JavaScript', 'TypeScript',];

  devOpsChips = ['Jakarta EE', 'Eclipse', 'intelliJ', 'Miro', 'JIRA',
    'Jenkins', 'npm', 'maven', 'subversion', 'Github', 'MS Teams', 'postman',
    'Agile Development practice', 'Virtual Machines'];

  testingChips = ['JUnit', 'Jest', 'Selenium', 'Cucumber', 'testNG'];

  uiChips = ['InVision', 'Adobe XD'];

  dataScienceChips = ['Matlab', 'R', 'Tableau'];

  constructor() { }

  ngOnInit(): void {
  }

}
