import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BudgetForm from "./BudgetForm";

describe("BudgetForm", () => {
  it("calls setMonthlyBudget with the input value when the form is submitted", () => {
    const setMonthlyBudgetMock = jest.fn();
    render(<BudgetForm setMonthlyBudget={setMonthlyBudgetMock} />);

    const budgetInput = screen.getByLabelText("Set Monthly Budget:");
    fireEvent.change(budgetInput, { target: { value: "500" } });
    const submitButton = screen.getByText("Set Budget");
    fireEvent.click(submitButton);

    expect(setMonthlyBudgetMock).toHaveBeenCalledWith(500);
  });

  it("does not call setMonthlyBudget when the form is submitted with an invalid input value", () => {
    const setMonthlyBudgetMock = jest.fn();
    render(<BudgetForm setMonthlyBudget={setMonthlyBudgetMock} />);

    const budgetInput = screen.getByLabelText("Set Monthly Budget:");
    fireEvent.change(budgetInput, { target: { value: "-100" } });
    const submitButton = screen.getByText("Set Budget");
    fireEvent.click(submitButton);

    expect(setMonthlyBudgetMock).not.toHaveBeenCalled();
  });
});
