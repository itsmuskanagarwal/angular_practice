import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OninitComponent } from './oninit.component';

describe('OninitComponent', () => {
  let component: OninitComponent;
  let fixture: ComponentFixture<OninitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OninitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
