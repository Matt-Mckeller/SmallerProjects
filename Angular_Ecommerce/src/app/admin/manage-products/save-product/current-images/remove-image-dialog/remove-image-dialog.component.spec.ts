import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveImageDialogComponent } from './remove-image-dialog.component';

describe('RemoveImageDialogComponent', () => {
  let component: RemoveImageDialogComponent;
  let fixture: ComponentFixture<RemoveImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
