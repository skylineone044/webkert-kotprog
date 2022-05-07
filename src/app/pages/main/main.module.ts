import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { QuestionnaireListModule } from '../questionnaires/questionnaire-list/questionnaire-list.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    QuestionnaireListModule,
  ]
})
export class MainModule { }
