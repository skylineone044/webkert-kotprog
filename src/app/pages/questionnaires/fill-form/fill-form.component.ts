import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from '../../../shared/models/Questionnaire';
import { Question, QuestionC } from '../../../shared/models/Question';
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

  public questions: QuestionC[] = [];

  public myFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qs: QuestionnaireService
  ) {}

  load_questionnaire(ques: Questionnaire | undefined) {
    console.log('loading questionnaire: ' + JSON.stringify(ques?.id));
    console.log('loading questionnaire: ' + JSON.stringify(ques?.title));
    console.log('loading questionnaire: ' + JSON.stringify(ques?.questions));

    let group: any = {};

    ques?.questions.forEach((input_template) => {
      // console.log("indputid: " + input_template.id)
      this.questions.push(new QuestionC(input_template.id, input_template.type, input_template.text, input_template.choices))
      group[input_template.id] = new FormControl('');
    });

    console.log('loaded questions: ' + JSON.stringify(this.questions));
    this.myFormGroup = new FormGroup(group);
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

  onSubmit() {}
}
