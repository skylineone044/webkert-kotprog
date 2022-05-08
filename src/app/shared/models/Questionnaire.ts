import { Question } from "./Question";

export interface Questionnaire {
    id: string,
    questions: Array<Question>; // question ids
    title: string;
}