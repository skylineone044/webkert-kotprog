import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/shared/models/Question';

import {MatCard} from '@angular/material/card'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() questionobs: Observable<Question | undefined>;
  question: Question;


  constructor() { }

  ngOnInit(): void {
    this.questionobs.subscribe(q => {
      if (q !== undefined) {
      this.question = q;
      }
    });
  }

}
