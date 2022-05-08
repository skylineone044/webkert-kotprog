import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FillFormRoutingModule } from './fill-form-routing.module';
import { FillFormComponent } from './fill-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FillFormComponent
  ],
  imports: [
    CommonModule,
    FillFormRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FillFormModule { }
