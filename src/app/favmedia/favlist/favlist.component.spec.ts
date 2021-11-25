/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavlistComponent } from './favlist.component';

describe('FavlistComponent', () => {
  let component: FavlistComponent;
  let fixture: ComponentFixture<FavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
