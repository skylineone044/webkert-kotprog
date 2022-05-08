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
  questions_obs: Observable<Question | undefined>[];
  questions: Question[];


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
        this.questions_obs = this.qs.getQuestionsByQuestionnaireId(this.questionnaire_id)
        for (let qobs of this.questions_obs) {
          qobs.subscribe(question => {
            if (question !== undefined) {
              this.questions.push(question);
            }
          });
        }
    }
  }



}
