import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/shared/models/Questionnaire';
import { QuestionnaireService } from '../../../shared/services/questionnaire.service';
import { QuestionnaireCardComponent } from '../questionnaire-card/questionnaire-card.component';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  questionnaries: Array<Questionnaire> = [];

  constructor(private qs: QuestionnaireService) { }

  ngOnInit(): void {
    this.qs.getQuestionnaireList().subscribe(val => {this.questionnaries = val; console.log(val)});
  }

}
