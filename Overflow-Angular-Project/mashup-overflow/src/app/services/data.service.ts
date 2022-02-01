import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { map, take, exhaustMap } from 'rxjs/operators';
import { QuestionsResponse } from '../models/questionsresponse.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  listQuestions(url: string) {
    return this.http.get(url);
  }
  searchQuestions(keyword: string) {
    return this.http
      .get(
        'https://forum.mashupstack.com/api/question/search?keyword=' + keyword
      )
      .pipe(
        map((response: { result: QuestionsResponse }) => {
          let questions: QuestionsResponse = response.result;
          console.log(questions);
          return questions;
        })
      );
  }
  askQuestion(title: string, question: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        const body = new HttpParams()
          .set('title', title)
          .set('question', question);
        return this.http.post(
          'https://forum.mashupstack.com/api/question',
          body,
          {
            headers: headers,
          }
        );
      })
    );
  }
  showQuestion(id: number) {
    return this.http.get('https://forum.mashupstack.com/api/question/' + id);
  }
  submitAnswer(answer: string, questionId: number) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        const body = new HttpParams().set('answer', answer);
        return this.http.post(
          'https://forum.mashupstack.com/api/question/' +
            questionId +
            '/answer',
          body,
          { headers: headers }
        );
      })
    );
  }
  listMyQuestions(url: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        return this.http.get(url, { headers: headers });
      }),
      map((response: { questions: QuestionsResponse }) => {
        let questions: QuestionsResponse = response.questions;
        console.log(questions);
        return questions;
      })
    );
  }
  listAnsweredQuestions(url: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        return this.http.get(url, { headers: headers }).pipe(
          map((response: { questions: QuestionsResponse }) => {
            let questions: QuestionsResponse = response.questions;
            console.log(questions);
            return questions;
          })
        );
      })
    );
  }
  deleteAnswer(answerId: number) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        return this.http.delete(
          'https://forum.mashupstack.com/api/answer/' + answerId,
          { headers: headers }
        );
      })
    );
  }
  deleteQuestion(questionId: number) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        return this.http.delete(
          'https://forum.mashupstack.com/api/question/' + questionId,
          { headers: headers }
        );
      })
    );
  }
  editQuestion(questionId: number, title: string, question: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        const body = new HttpParams()
          .set('title', title)
          .set('question', question);
        return this.http.put(
          'https://forum.mashupstack.com/api/question/' + questionId,
          body,
          { headers: headers }
        );
      })
    );
  }
  editAnswer(answerId: number, answer: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        const body = new HttpParams().set('answer', answer);
        return this.http.put(
          'https://forum.mashupstack.com/api/answer/' + answerId,
          body,
          { headers: headers }
        );
      })
    );
  }
}
