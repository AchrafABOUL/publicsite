import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveErrorComponent } from './archive-error.component';

describe('ArchiveErrorComponent', () => {
  let component: ArchiveErrorComponent;
  let fixture: ComponentFixture<ArchiveErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
