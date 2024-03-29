import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaynightService {

  title!: boolean;
  webDevTitle: string = "Full-Stack Developer";
  appDevTitle: string = "Mobile App Developer";

  constructor() {
    this.title = true;
  }

  setTitle(b: boolean) {
    this.title = b; //TODO also change theme to day/night based on the title
  }

  getTitle(): string {
    return this.title ? this.webDevTitle : this.appDevTitle;
    ;
  }
}
