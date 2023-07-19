import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientInfoPage } from './ingredient-info.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientInfoPageRoutingModule {}
