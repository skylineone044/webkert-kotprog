import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'

import { QuestionnaireCardComponent } from './questionnaire-card.component'



@NgModule({
  declarations: [
    QuestionnaireCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
  ],
  exports: [
    QuestionnaireCardComponent,
  ],
})
export class QuestionnaireCardModule { }
