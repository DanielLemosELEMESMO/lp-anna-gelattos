import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoForteComponent } from './ponto-forte.component';

describe('PontoForteComponent', () => {
  let component: PontoForteComponent;
  let fixture: ComponentFixture<PontoForteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontoForteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontoForteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
