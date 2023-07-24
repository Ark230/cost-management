import { Expense } from "../Expense";

type Pagination = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  filtersAndSorters: any[];
};

export interface ExpenseSlice {
  content: Expense[];
  pagination: Pagination;
}

export const initialState: ExpenseSlice = {
  content: [],
  pagination: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    filtersAndSorters: [],
  },
};
