import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveImageOverlayComponent } from './remove-image-overlay.component';

describe('RemoveImageOverlayComponent', () => {
  let component: RemoveImageOverlayComponent;
  let fixture: ComponentFixture<RemoveImageOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveImageOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveImageOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
