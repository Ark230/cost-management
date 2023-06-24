import { screen, fireEvent, render } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

describe("Expense form", () => {
  const categories: string[] = ["Groceries", "Tools", ""];

  it("creates an expense", () => {
    render(<ExpenseForm categories={categories} />);

    const input = screen.getByRole("textbox", { name: "expense-description" });
  });
});
