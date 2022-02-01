import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css'],
})
export class EditquestionComponent implements OnInit {
  @Input() id: number;
  @Output() close = new EventEmitter();
  @Output() editted = new EventEmitter();
  questionValue = '';
  titleValue = '';
  questionId: number;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .showQuestion(this.id)
      .subscribe((responseData: Question) => {
        this.questionValue = responseData.question;
        this.titleValue = responseData.title;
        this.questionId = responseData.id;
      });
  }

  onClose() {
    this.close.emit();
  }

  onEditQuestionSubmit(data) {
    this.dataService
      .editQuestion(this.questionId, data.title, data.question)
      .subscribe((response) => {
        this.editted.emit();
      });
  }
}
