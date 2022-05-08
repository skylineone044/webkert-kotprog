export interface Answer {
  getValue(): object;
  question_id: string;
  type: string;
  data: string;
}

export class AnswerC implements Answer {
  question_id: string;
  type: string;
  data: string;
  constructor(question_id: string, type: string, data: string) {
    this.question_id = question_id;
    this.type = type;
    this.data = data;
  }

  getValue() {
    return {
      question_id: this.question_id,
      type: this.type,
      data: this.data,
    };
  }
}

export interface QuestionnaireAnswer {
  id: string;
  questionnaire_id: string;
  answers: Array<Answer>;
  date: Date;
  getValue(): object;
}

export class QuestionnaireAnswerC implements QuestionnaireAnswer {
  id: string;
  questionnaire_id: string;
  answers: Array<Answer>;
  date: Date;
  constructor(
    id: string,
    questionnaire_id: string,
    answers: Answer[],
    date: Date
  ) {
    this.id = id;
    this.questionnaire_id = questionnaire_id;
    this.answers = answers;
    this.date = date;
  }

  getValue() {
    let asners = new Array<Object>();
    this.answers.forEach((a) => asners.push(a.getValue()));
    return {
      id: this.id,
      questionnaire_id: this.questionnaire_id,
      answers: asners,
      date: this.date,
    };
  }
}
