import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarPage } from './search-bar.page';

describe('SearchBarPage', () => {
  let component: SearchBarPage;
  let fixture: ComponentFixture<SearchBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
