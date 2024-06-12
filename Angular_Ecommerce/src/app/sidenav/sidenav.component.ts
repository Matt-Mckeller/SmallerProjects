import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SideNavService} from "@app/side-nav.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  tabs = [
    {
      link: '/home',
      icon: 'home',
      text: 'Home'
    },
    {
      link: '/about',
      icon: 'view_carousel',
      text: 'About Us'
    },
    {
      link: '/vintage',
      icon: 'donut_large',
      text: 'Shop'
    }
  ];

  constructor(
    private router: Router,
    private sideNavService: SideNavService
  ) { }

  ngOnInit() {
  }

  handleClose() {
    this.sideNavService.close();
  }
}
