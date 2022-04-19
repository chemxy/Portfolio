import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  jobs = [
    {
      title: 'Software developer',
      company: 'Insurance Corporation of British Columbia (ICBC)',
      location: 'Victoria, BC, Canada',
      duration: 'Jan 2021 - Dec 2021',
      description: 'TBD'
    },
    {
      title: 'Product Designer and Developer',
      company: 'FROMASTERA design ltd',
      location: 'Vancouver, BC, Canada',
      duration: 'Sep 2020 - Dec 2020',
      description: ' Designed and implemented hardware products related to embedded systems such as full electronic circuits. Developed and implemented relevant software products such as control systems and bluetooth support applications.  Main technologies and programming languages used are C, JavaScript, XML and Kotlin.'
    },
    {
      title: 'Software Developer',
      company: 'LIJIN TECHNOLOGY DEVELOPMENT CO., LTD',
      location: 'Sichuan, China',
      duration: 'May 2020 – Aug 2020',
      description: 'Designed and developed a web-based Wechat mini-program from scratch and connected it to the Wechat cloud database.Main technologies used are Wechat developer tools, WXML, WXSS, JSON and JavaScript. '
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
