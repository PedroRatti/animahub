import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDoisComponent } from './aviso-dois.component';

describe('AvisoDoisComponent', () => {
  let component: AvisoDoisComponent;
  let fixture: ComponentFixture<AvisoDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoDoisComponent]
    });
    fixture = TestBed.createComponent(AvisoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
