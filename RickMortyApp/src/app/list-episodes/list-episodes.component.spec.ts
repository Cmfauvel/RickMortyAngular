import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpisodesComponent } from './list-episodes.component';

describe('ListEpisodesComponent', () => {
  let component: ListEpisodesComponent;
  let fixture: ComponentFixture<ListEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
