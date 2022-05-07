import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillFormComponent } from './fill-form.component';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    FillFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FillFormModule { }
