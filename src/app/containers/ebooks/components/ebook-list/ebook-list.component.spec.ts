/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EbookListComponent } from './ebook-list.component';

describe('EbookListComponent', () => {
  let component: EbookListComponent;
  let fixture: ComponentFixture<EbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
