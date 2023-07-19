import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientInfoPageRoutingModule } from './ingredient-info-routing.module';

import { IngredientInfoPage } from './ingredient-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientInfoPageRoutingModule
  ],
  declarations: [IngredientInfoPage]
})
export class IngredientInfoPageModule {}
