import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, tap, throwIfEmpty } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';
import { Question } from '../models/Question';
import { Answer, QuestionnaireAnswer } from '../models/Answer';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  db_collection_questionnaires = "Questionnaires";
  db_collection_questions = "Questions";
  db_collection_answers = "Answers";

  chache_questionnaire: Questionnaire | undefined;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage    
  ) { }

  getQuestionnaireList(): Observable<Questionnaire[]> {
    return this.afs.collection<Questionnaire>(this.db_collection_questionnaires, ref => ref.orderBy('id', 'asc')).valueChanges();
  }

  getQuestionnaireById(id: string): Observable<Questionnaire | undefined> {
    return this.afs.collection<Questionnaire>(this.db_collection_questionnaires, ref => ref.orderBy('id', 'asc')).doc(id).valueChanges();
  }

  getQuestionById(id: string): Observable<Question | undefined> {
    return this.afs.collection<Question>(this.db_collection_questions, ref => ref.orderBy('id', 'asc')).doc(id).valueChanges();
  }

  saveAnswers(ans: QuestionnaireAnswer) {
    let qav = ans.getValue()
    console.log(qav);
    return this.afs.collection(this.db_collection_answers).doc(ans.id).set(qav);
  }

  getNewId() {
    return this.afs.createId();
  }
}
