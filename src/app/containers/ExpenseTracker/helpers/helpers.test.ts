import { calculateCurrentMonthExpenses } from "./index";
import { Expense } from "@domain/entities/Expense";

describe("current month expenses", () => {
  let expenses: Expense[];

  beforeAll(() => {
    expenses = [
      {
        id: 1,
        description: "test1",
        amount: 100,
        date: new Date().toString(),
        category: "test",
      },
      {
        id: 2,
        description: "test2",
        amount: 400,
        date: new Date().toString(),
        category: "test",
      },
    ];
  });

  it("should return 0 if there are no expenses", () => {
    const result = calculateCurrentMonthExpenses([]);
    expect(result).toBe(0);
  });

  it("should return the sum of the expenses for the current month", () => {
    const result = calculateCurrentMonthExpenses(expenses);
    expect(result).toBe(500);
  });

  it("should return 0 if there are no expenses for the current month", () => {
    const expensesForAnotherMonth: Expense[] = [
      {
        id: 1,
        description: "test1",
        amount: 100,
        date: new Date("2020-01-01").toString(),
        category: "test",
      },
      {
        id: 2,
        description: "test2",
        amount: 400,
        date: new Date("2020-01-01").toString(),
        category: "test",
      },
    ];

    const result = calculateCurrentMonthExpenses(expensesForAnotherMonth);
    expect(result).toBe(0);
  });

  it("should return just the expenses for the current month", () => {
    const expensesForAnotherMonth: Expense[] = [
      {
        id: 1,
        description: "test1",
        amount: 100,
        date: new Date("2020-01-01").toString(),
        category: "test",
      },
      {
        id: 2,
        description: "test2",
        amount: 400,
        date: new Date().toString(),
        category: "test",
      },
    ];

    const result = calculateCurrentMonthExpenses(expensesForAnotherMonth);
    expect(result).toBe(400);
  });

  it("should not allow negative expenses", () => {
    const expensesWithNegativeAmount: Expense[] = [
      {
        id: 1,
        description: "test1",
        amount: -100,
        date: new Date().toString(),
        category: "test",
      },
      {
        id: 2,
        description: "test2",
        amount: 400,
        date: new Date().toString(),
        category: "test",
      },
    ];

    const result = calculateCurrentMonthExpenses(expensesWithNegativeAmount);
    expect(result).toBe(400);
  });
});
