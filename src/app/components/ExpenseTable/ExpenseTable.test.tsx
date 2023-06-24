import ExpenseTable from "./ExpenseTable";
import { Expense } from "@/domain/entities/Expense";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Expense table", () => {
  const expenses: Expense[] = [
    {
      id: 1,
      description: "copilot",
      amount: 10,
      date: new Date().toString(),
      category: "Tools",
    },
  ];

  it("displays expenses on a table", () => {
    render(<ExpenseTable expenses={expenses} />);

    const descriptions = screen
      .getAllByRole("cell")
      .map((cell) => cell.textContent);
    expect(descriptions).toEqual(["copilot", "Tools", "$10"]);
  });
});
