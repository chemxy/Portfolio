import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  tabletMode!: boolean;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.tabletMode = false;
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.tabletMode = true;
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.close();
        this.tabletMode = false;
      }
    });
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }
}
