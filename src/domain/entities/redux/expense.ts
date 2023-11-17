import { Expense } from "../Expense";

type Pagination = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  filtersAndSorters: any[];
};

export type ExpenseManagement = {
  isLoading: boolean;
  process: string;
  processEnded: boolean;
  errorMessage?: string | Record<string, any>;
  successMessage?: string | Record<string, any>;
};

export interface ExpenseSlice {
  content: Expense[];
  pagination: Pagination;
  expenseManagements: ExpenseManagement[];
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
  expenseManagements: [],
};
