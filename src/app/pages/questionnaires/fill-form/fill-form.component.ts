import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from '../../../shared/models/Questionnaire';
import { Question } from '../../../shared/models/Question';
import { QuestionnaireService } from '../../../shared/services/questionnaire.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss'],
})
export class FillFormComponent implements OnInit {
  questionnaire_id: string | null;
  questionnaire: Questionnaire;
  questions: [Observable<Question | undefined>, FormControl][] = [];

  form_group_ids: Map<string, FormControl>;
  form_group: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qs: QuestionnaireService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((param) => {
      this.questionnaire_id = param.get('questionnaire');
      console.log(this.questionnaire_id);
    });
    console.log('filling out questionnaire: ' + this.questionnaire_id);
    if (this.questionnaire_id === null) {
      this.router.navigate(['/not-found']);
      this.router.navigate(['not-found']);
    } else {
      console.log('getting Questionnaire...');
      this.qs.getQuestionnaireById(this.questionnaire_id).subscribe((q) => {
        if (q !== undefined) {
          this.questionnaire = q;
          console.log("fetched questions: " + this.questionnaire.questions)
          for(var i = 0; i < this.questionnaire.questions.length; i++){
            console.log("geting question: " + this.questionnaire.questions[i].id)
            this.questions.push([this.qs.getQuestionById(this.questionnaire.questions[i].id), new FormControl('')])
          }
        }
        for(var i = 0; i < this.questionnaire.questions.length; i++){
          this.form_group_ids.set(this.questionnaire.questions[i].id, this.questions[i][1]);
        }
        this.form_group = new FormGroup(Object.fromEntries(this.form_group_ids));
      });
    }
  }
}
