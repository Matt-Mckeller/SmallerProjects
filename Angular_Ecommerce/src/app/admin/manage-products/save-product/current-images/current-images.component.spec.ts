import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentImagesComponent } from './current-images.component';

describe('CurrentImagesComponent', () => {
  let component: CurrentImagesComponent;
  let fixture: ComponentFixture<CurrentImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
