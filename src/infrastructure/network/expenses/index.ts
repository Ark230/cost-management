import services from "@services/expenses";
import { AxiosInstance } from "axios";
import { RequestElements } from "@/domain/types/network";

const { baseExpensesURI, manageExpenseURI } = services();

const expenses = (client: AxiosInstance): any => ({
  getExpenses: () => {
    return client.get(baseExpensesURI);
  },
});

export default expenses;
