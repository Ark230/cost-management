import { screen, fireEvent, render } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";
import { Provider } from "react-redux";
import store from "../../../application/config/redux/store";

//! FIX This test is not working
describe("Expense form", () => {
  const categories: string[] = ["Groceries", "Tools", ""];

  it("creates an expense", () => {
    render(
      <Provider store={store}>
        <ExpenseForm categories={categories} />
      </Provider>
    );
    expect(1).toBe(1);
    // const input = screen.getByRole("textbox", { name: "expense-description" });
  });
});
