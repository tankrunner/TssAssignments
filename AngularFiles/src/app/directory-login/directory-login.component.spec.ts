import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryLoginComponent } from './directory-login.component';

describe('DirectoryLoginComponent', () => {
  let component: DirectoryLoginComponent;
  let fixture: ComponentFixture<DirectoryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
