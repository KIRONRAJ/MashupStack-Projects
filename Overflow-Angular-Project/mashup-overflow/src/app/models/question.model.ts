import { Answer } from './answer.model';
export interface Question {
  id: number;
  user_id: number;
  title: string;
  question: string;
  created_at: '2019-05-15 05:35:59';
  updated_at: string;
  answers: Answer[];
  user: {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
}
