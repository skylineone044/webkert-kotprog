import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from '../../../shared/models/Questionnaire';
import { Question,  } from '../../../shared/models/Question';
import { QuestionnaireService } from '../../../shared/services/questionnaire.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss'],
})
export class FillFormComponent implements OnInit {
  questionnaire_id: string | null;
  public questionnaire: Questionnaire | undefined;

  public questions: Question[] = [];

  public myFormGroup: FormGroup;

  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qs: QuestionnaireService
  ) {}

  load_questionnaire(ques: Questionnaire | undefined) {
    this.questionnaire = ques;
    // console.log('loading questionnaire: ' + JSON.stringify(ques));
    // console.log('loading questionnaire: ' + JSON.stringify(ques?.id));
    // console.log('loading questionnaire: ' + JSON.stringify(ques?.title));
    // console.log('loading questionnaire: ' + JSON.stringify(ques?.questions));

    let group: any = {};

    ques?.questions.forEach((input_template) => {
      let questi = this.qs.getQuestionById(input_template.id);
      if (questi !== undefined) {
        questi.subscribe(qqq => {
          if (qqq !== undefined) {
            // console.log("aaa: " + JSON.stringify(qqq))
            this.questions.push(qqq)
            group[qqq.id] = new FormControl('');
          } else {
            console.log("qqq is undefined")
          }
        });
      } else {
        console.log("questy is undefined")
      }
    });

    // console.log('loaded questions: ' + JSON.stringify(this.questions));
    this.myFormGroup = new FormGroup(group);
    this.loading = false;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((param) => {
      this.questionnaire_id = param.get('questionnaire');
    });
    console.log('filling out questionnaire: ' + this.questionnaire_id);

    if (this.questionnaire_id !== null) {
      this.qs.getQuestionnaireById(this.questionnaire_id).subscribe((q) => {
        this.load_questionnaire(q);
      });
    }
  }

  onSubmit() {
    console.log("submitting form...");
    for (let q of this.questions) {
      console.log(this.myFormGroup.get(q.id)?.value)
    }
  }
}
