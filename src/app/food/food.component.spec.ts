/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { foodComponent } from './food.component';

describe('foodComponent', () => {
  let component: foodComponent;
  let fixture: ComponentFixture<foodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ foodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(foodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
