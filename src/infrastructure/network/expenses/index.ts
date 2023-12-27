import services from "@services/expenses";
import { AxiosInstance } from "axios";
import { RequestElements } from "@/domain/types/network";

const { baseExpensesURI, manageExpenseURI } = services();

const expenses = (client: AxiosInstance): any => ({
  getExpenses: () => {
    return client.get(baseExpensesURI);
  },
  addExpense: ({ body }: RequestElements) => {
    return client.post(baseExpensesURI, body);
  },
  deleteExpense: ({ pathVariables }: RequestElements) => {
    return client.delete(
      manageExpenseURI.replace(":id", String(pathVariables!.id))
    );
  },
  updateExpense: ({ pathVariables, body }: RequestElements) => {
    return client.patch(
      manageExpenseURI.replace(":id", String(pathVariables!.id)),
      body
    );
  },
});

export default expenses;
