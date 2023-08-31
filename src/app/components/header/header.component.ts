import { Component } from '@angular/core';
import { DaynightService } from 'src/app/service/daynight.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private mode: DaynightService) { }

  changeTitleToWebDev(): void {
    this.mode.setTitle(true);
  }

  changeTitleToAppDev(): void {
    this.mode.setTitle(false);
  }

  getTitle(): string {
    return this.mode.getTitle();
  }
}
