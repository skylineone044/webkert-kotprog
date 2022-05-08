import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from '../../../shared/models/Questionnaire';
import { Question } from '../../../shared/models/Question';
import { QuestionnaireService } from '../../../shared/services/questionnaire.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss']
})
export class FillFormComponent implements OnInit {
  questionnaire_id: string | null;
  questionnaire: Questionnaire;
  questions: Observable<Question | undefined>[];


  constructor(private route: ActivatedRoute, private router: Router, private qs: QuestionnaireService) {
    // this.route.queryParams.subscribe(params => console.log(params));
   }
   

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {this.questionnaire_id = param.get('questionnaire'); console.log(this.questionnaire_id)});
    // this.questionnaire_id = this.route.snapshot.queryParamMap.get('questionnaire');
    console.log("filling out questionnaire: " + this.questionnaire_id)
    if (this.questionnaire_id === null) {
      this.router.navigate(['/not-found']);
      this.router.navigate(['not-found']);
    } else {
      this.qs.getQuestionnaireById(this.questionnaire_id).subscribe(
        q => {
          if (q !== undefined) {
            this.questionnaire = q
          }
        });
        this.questions = this.qs.getQuestionsByQuestionnaireId(this.questionnaire_id)
    }
  }



}
