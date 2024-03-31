import {BreakpointObserver} from '@angular/cdk/layout';
import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {DaynightService} from 'src/app/service/daynight.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  constructor(private observer: BreakpointObserver, private mode: DaynightService) {

  }

}
