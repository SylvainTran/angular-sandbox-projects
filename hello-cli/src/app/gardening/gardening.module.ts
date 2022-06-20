import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardeningComponent } from './gardening.component';

@NgModule({
  declarations: [
    GardeningComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GardeningComponent
  ]
})
export class GardeningModule { }
