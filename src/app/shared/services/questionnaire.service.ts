import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';
import { Question } from '../models/Question';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  db_collection_questionnaires = "Questionnaires";
  db_collection_questions = "Questions";

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage    
  ) { }

  getQuestionnaireList(): Observable<Questionnaire[]> {
    return this.afs.collection<Questionnaire>(this.db_collection_questionnaires).valueChanges();
  }

  getQuestionnaireById(id: string): Observable<Questionnaire | undefined> {
    return this.afs.collection<Questionnaire>(this.db_collection_questionnaires).doc(id).valueChanges();
  }

  getQuestionById(id: string): Observable<Question | undefined> {
    return this.afs.collection<Question>(this.db_collection_questions).doc(id).valueChanges();
  }

  getQuestionsByQuestionnaireId(id: string): Observable<Question | undefined>[] {
    let questions: Array<Observable<Question | undefined>> = [];

    this.getQuestionnaireById(id).subscribe(questionnaire => {
      if (questionnaire !== undefined) {
        for (let question_id of questionnaire?.questions) {
          questions.push(this.getQuestionById(question_id));
        }
      }
    });
    return questions;
  }
}
