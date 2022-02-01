import { ListItem } from './listitem.model';

export interface QuestionsResponse {
  current_page: number;
  data: ListItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}
