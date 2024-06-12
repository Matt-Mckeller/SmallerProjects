import { Component, OnInit } from '@angular/core';
import { SideNavService } from "./side-nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  drawerOpen: boolean;

  constructor(
    private sideNavService: SideNavService,
  ) { }

  ngOnInit() {
    this.sideNavService.getOpenedSubject()
      .subscribe(opened => {
        this.drawerOpen = opened;
      });
    this.drawerOpen = this.sideNavService.getIsOpened();
  }

  handleClose() {
    this.sideNavService.close();
  }
  handleOpen() {
    this.sideNavService.open();
  }
}
