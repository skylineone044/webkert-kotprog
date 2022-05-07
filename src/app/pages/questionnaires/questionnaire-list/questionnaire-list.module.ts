import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireListComponent } from './questionnaire-list.component';
import { QuestionnaireCardModule } from '../questionnaire-card/questionnaire-card.module';
import { QuestionnaireCardComponent } from '../questionnaire-card/questionnaire-card.component';



@NgModule({
  declarations: [
    QuestionnaireListComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireCardModule,
  ],
  exports: [
    QuestionnaireListComponent
  ]
})
export class QuestionnaireListModule { }
