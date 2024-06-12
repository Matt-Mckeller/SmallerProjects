import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideNavService {
  private openedSubject: Subject<boolean>;
  private isOpened: boolean;

  constructor() {
    this.openedSubject = <Subject<boolean>>new Subject();
    this.isOpened = false;
  }
  getOpenedSubject() {
    return this.openedSubject.asObservable();
  }
  getIsOpened() {
    return this.isOpened;
  }
  toggle() {
    this.isOpened = !this.isOpened;
    this.openedSubject.next(this.isOpened);
  }

  close(){
    this.isOpened = false;
    this.openedSubject.next(false);
  }

  open(){
    this.isOpened = true;
    this.openedSubject.next(true);
  }
}
