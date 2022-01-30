import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faTwitterSquare = faTwitterSquare;
  faYoutubeSquare = faYoutubeSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
