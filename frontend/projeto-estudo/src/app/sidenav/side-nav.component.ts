import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {navBarData} from "./nav-data";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter()
  collapsed: boolean;
  screenWidth: 0;
  navData = navBarData;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
