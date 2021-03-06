import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapDirectionsPage } from './map-directions.page';
import { ElementsModule } from 'src/app/elements/elements.module';

const routes: Routes = [
  {
    path: '',
    component: MapDirectionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapDirectionsPage]
})
export class MapDirectionsPageModule {}
