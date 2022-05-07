import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Questionnaire } from '../.../../../../shared/models/Questionnaire';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss']
})
export class QuestionnaireCardComponent implements OnInit, OnChanges {

  @Input() questionnaire:  Questionnaire;
  title: string;
  id: string;

  constructor() { }
  ngOnChanges() {
    this.title = this.questionnaire.title
    this.id = this.questionnaire.id
  }

  ngOnInit(): void {
  }


}
