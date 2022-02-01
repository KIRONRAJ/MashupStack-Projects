import { QuestionsResponse } from '../models/questionsresponse.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input()
  questionResponse!: QuestionsResponse;
  @Output() pageNumberEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  generateArray(n: number): number[] {
    return [...Array(n).keys()];
  }

  pageChangeHandler(pageNum: number) {
    this.pageNumberEmitter.emit(pageNum);
  }
}
