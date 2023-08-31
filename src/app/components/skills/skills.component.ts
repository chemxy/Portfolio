import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

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

}
