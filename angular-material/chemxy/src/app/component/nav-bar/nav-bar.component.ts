import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('sideNavReference')
  sidenavRef!: MatSidenav;

  tabletMode!: boolean;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.tabletMode = false;
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenavRef.mode = 'over';
        this.sidenavRef.close();
        this.tabletMode = true;
      } else {
        this.sidenavRef.mode = 'side';
        this.sidenavRef.close();
        this.tabletMode = false;
      }
    });
  }

  toggleSideNav() {
    this.sidenavRef.toggle();
  }
}
