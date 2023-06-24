import BudgetInfo from "./BudgetInfo";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("BudgetInfo", () => {
  it("displays the component", () => {
    const monthlyBudget: number = 100;
    const totalExpenses: number = 10;
    const remainingBudget: number = monthlyBudget - totalExpenses;

    render(
      <BudgetInfo monthlyBudget={monthlyBudget} totalExpenses={totalExpenses} />
    );

    const monthlyBudgetText = screen.getByText(/Monthly Budget: \$/i);
    const totalExpensesText = screen.getByText(/Total Expenses: \$/i);
    const remainingBudgetText = screen.getByText(/Remaining Budget: \$/i);

    expect(monthlyBudgetText).toHaveTextContent(
      `Monthly Budget: $${monthlyBudget}`
    );
    expect(totalExpensesText).toHaveTextContent(
      `Total Expenses: $${totalExpenses}`
    );
    expect(remainingBudgetText).toHaveTextContent(
      `Remaining Budget: $${remainingBudget}`
    );
  });

  it("calculates the remaining budget", () => {
    const monthlyBudget: number = 100;
    const totalExpenses: number = 10;
  });
});
