import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  jobs = [
    {
      title: 'Full-Stack Developer',
      company: 'Insurance Corporation of British Columbia (ICBC)',
      location: 'Victoria, BC, Canada',
      startDate: 'Jan 2022',
      endDate: 'Sep 2022',
      description: ['Rewrote an internal web application in Angular connecting to Spring Boot API.',
        'Developed 20+ Angular components and 10+ Angular services.',
        'Rebuilt 15+ UI with modern designs based on ICBC new UI guidance.',
        'Completed several researches related to Cypress automation testing, Docker containerization technique and DevOps using Microsoft Azure and GitLab.',
        'Onboarded & assisted 3 co-op students towards the completion of their work terms.',
      ]
    },
    {
      title: 'Java developer',
      company: 'Insurance Corporation of British Columbia (ICBC)',
      location: 'Victoria, BC, Canada',
      startDate: 'Jan 2021',
      endDate: 'Dec 2021',
      description: ['Developed a configurable Java command-line utility to automate the comparison and validation of the database migration results.',
        'Provided technical support and maintenance towards production phase.',
        'Developed a PowerShell program to help transfer database files automatically.',
        'Successfully compared and validated 20000+ data sets and millions of records.',
        'Experience with Windows Scheduler, PGP encryption/decryption and Globalscape.',
        'Developed two automation testing frameworks using Selenium, Cucumber and TestNG. Created 100+ test cases.',
      ]
    },
    {
      title: 'Product Designer and Developer',
      company: 'FROMASTERA design ltd',
      location: 'Vancouver, BC, Canada',
      startDate: 'Sep 2020',
      endDate: 'Dec 2020',
      description: [' Designed and implemented hardware products related to embedded systems such as full electronic circuits.',
        'Developed and implemented relevant software products such as control systems and bluetooth support applications.',
        'Main technologies and programming languages used are C, JavaScript, XML and Kotlin.']
    },
    {
      title: 'Software Developer',
      company: 'LIJIN TECHNOLOGY DEVELOPMENT CO., LTD',
      location: 'Sichuan, China',
      startDate: 'May 2020',
      endDate: 'Aug 2020',
      description: ['Designed and developed a web-based Wechat mini-program from scratch and connected it to the Wechat cloud database.',
        'Main technologies used are Wechat developer tools, WXML, WXSS, JSON and JavaScript. ']
    },
  ];

  constructor () { }

  ngOnInit(): void {
  }

}
