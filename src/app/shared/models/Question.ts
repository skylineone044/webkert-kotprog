export interface Question {
  id: string;
  type: string;
  text: string;
  choices: Array<string>;
}