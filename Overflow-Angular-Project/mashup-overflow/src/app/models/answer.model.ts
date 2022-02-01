export interface Answer {
  id: number;
  user_id: number;
  question_id: number;
  answer: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
}
