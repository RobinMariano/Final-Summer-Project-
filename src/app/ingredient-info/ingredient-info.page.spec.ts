import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientInfoPage } from './ingredient-info.page';

describe('IngredientInfoPage', () => {
  let component: IngredientInfoPage;
  let fixture: ComponentFixture<IngredientInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngredientInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
