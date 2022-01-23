import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  smallWindowSize: boolean = (window.innerWidth < 720) ? true : false;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.smallWindowSize = (window.innerWidth < 720) ? true : false;
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.close();
      }
    });
  }

  onResize(event: any): void {
    this.smallWindowSize = (event.target.innerWidth <= 720) ? true : false;
  }
}
