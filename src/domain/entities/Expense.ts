// src/domain/entities/Expense.ts
export interface Expense {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string; // Add category property
}
