import { screen, fireEvent, render } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";
import { Provider } from "react-redux";
import store from "@redux/store";

describe("Expense form", () => {
  const categories: string[] = ["Groceries", "Tools", ""];

  it("creates an expense", () => {
    render(
      <Provider store={store}>
        <ExpenseForm categories={categories} />
      </Provider>
    );

    const dispatchSpy = jest.spyOn(store, "dispatch");
    const nameInput = screen.getByLabelText(/Expense Name:/i);
    const amountInput = screen.getByLabelText(/Amount:/i);

    fireEvent.change(nameInput, {
      target: { value: "Spaghetti" },
    });
    fireEvent.change(amountInput, {
      target: { value: 1500 },
    });
    fireEvent.change(screen.getByLabelText(/Category:/i), {
      target: { value: "Groceries" },
    });

    fireEvent.click(screen.getByText(/Add Expense/i));

    expect(dispatchSpy).toHaveBeenCalled();
    expect(nameInput).toHaveValue("");
    expect(amountInput).toHaveValue(0);

    dispatchSpy.mockClear();
  });

  it("doesnt create an expense if the form has missing values", () => {
    render(
      <Provider store={store}>
        <ExpenseForm categories={categories} />
      </Provider>
    );

    const dispatchSpy = jest.spyOn(store, "dispatch");

    fireEvent.change(screen.getByLabelText(/Expense Name:/i), {
      target: { value: "Spaghetti" },
    });

    fireEvent.click(screen.getByText(/Add Expense/i));

    expect(dispatchSpy).toHaveBeenCalledTimes(0);

    dispatchSpy.mockClear();
  });
});
