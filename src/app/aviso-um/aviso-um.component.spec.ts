import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoUmComponent } from './aviso-um.component';

describe('AvisoUmComponent', () => {
  let component: AvisoUmComponent;
  let fixture: ComponentFixture<AvisoUmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoUmComponent]
    });
    fixture = TestBed.createComponent(AvisoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
