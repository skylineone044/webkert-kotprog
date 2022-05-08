export interface Question {
  id: string;
  type: string;
  text: string;
  choices: Array<string>;
}

export class QuestionC implements Question {
    id: string;
    type: string;
    text: string;
    choices: string[];

  constructor(id: string, type: string, text: string, choices: Array<string>) {
    this.id = id;
    this.type = type;
    this.text = text;
    this.choices = choices;
  }
}
