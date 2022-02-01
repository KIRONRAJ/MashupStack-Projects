import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Question } from '../models/question.model';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-showquestion',
  templateUrl: './showquestion.component.html',
  styleUrls: ['./showquestion.component.css'],
})
export class ShowquestionComponent implements OnInit, OnDestroy {
  editAnswerId: number;
  editAnswerValue: string;
  isLoading: boolean = false;
  questionId: number;
  questionData: Question;
  isLoggedIn: boolean;
  userSub: Subscription;
  userId: number;
  editQuestion: boolean = false;
  editAnswer: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      if (user === null) {
        this.isLoggedIn = false;
      } else {
        this.userId = user.user.id;
        this.isLoggedIn = true;
      }
    });
    this.questionId = this.route.snapshot.params['id'];
    this.fetchQuestion(this.questionId);
  }

  onSubmitAnswer(data, answerForm: NgForm) {
    this.dataService
      .submitAnswer(data.answer, this.questionId)
      .subscribe((response) => {
        this.fetchQuestion(this.questionId);
        answerForm.resetForm();
      });
  }

  fetchQuestion(id) {
    this.isLoading = true;
    this.dataService.showQuestion(id).subscribe((responseData: Question) => {
      this.isLoading = false;
      this.questionData = responseData;
    });
    this.editQuestion = false;
    this.editAnswer = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  deleteAnswer(id: number) {
    this.dataService.deleteAnswer(id).subscribe((response) => {
      this.fetchQuestion(this.questionId);
    });
  }

  deleteQuestion(id: number) {
    this.dataService.deleteQuestion(id).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  showEditQuestionModal() {
    this.editQuestion = !this.editQuestion;
  }

  showEditAnswerModal(answer: string, id: number) {
    this.editAnswer = !this.editAnswer;
    this.editAnswerValue = answer;
    this.editAnswerId = id;
  }

  hideEditAnswerModal() {
    this.editAnswer = !this.editAnswer;
  }
}
