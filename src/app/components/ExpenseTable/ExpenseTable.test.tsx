import mockdate from "mockdate";
import ExpenseTable from "./ExpenseTable";
import { Expense } from "@/domain/entities/Expense";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Expense table", () => {
  beforeEach(() => {
    mockdate.set("2023-09-25T12:34:56Z");
  });

  const expenses: Expense[] = [
    {
      id: 1,
      name: "copilot",
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
    expect(descriptions).toEqual([
      "copilot",
      "25/09/2023 09:34",
      "Tools",
      "$ 10",
      "Eliminar",
    ]);
  });
});
