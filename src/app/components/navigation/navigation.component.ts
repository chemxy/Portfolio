import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DaynightService } from 'src/app/service/daynight.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild('navbarRef')
  navbarRef!: ElementRef;

  previousOffsetTop: number = -1;

  switch: boolean = true;
  previousSwitch: boolean = true;
  show: boolean = true;

  constructor(private observer: BreakpointObserver, private mode: DaynightService) {

  }
  getTitle(): string {
    return this.mode.getTitle();
  }

  ngOnInit() {
    const savedSwitch = localStorage.getItem('switch');
    this.switch = savedSwitch ? JSON.parse(savedSwitch) : true;

    this.observer.observe('(max-width: 768px)').subscribe(result => {
      this.show = !result.matches;
    })
  }

  ngAfterViewInit() {
    this.previousOffsetTop = this.navbarRef.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.switch = this.navbarRef.nativeElement.offsetTop == this.previousOffsetTop;
    if (this.switch != this.previousSwitch) {
      this.previousSwitch = this.switch;
      localStorage.setItem('switch', JSON.stringify(this.switch));
    }
    this.previousOffsetTop = this.navbarRef.nativeElement.offsetTop;
  }

}
