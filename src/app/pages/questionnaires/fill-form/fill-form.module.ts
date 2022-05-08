import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FillFormRoutingModule } from './fill-form-routing.module';
import { FillFormComponent } from './fill-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionFormComponent } from '../question-form/question-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    FillFormComponent,
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    FillFormRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
  ]
})
export class FillFormModule { }
