import { Expense } from "@domain/entities/Expense";
import styles from "./ExpenseTable.module.scss";

export interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  return (
    <div style={{ maxHeight: "30rem", overflowY: "scroll" }}>
      <table className={styles.expensesTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>
                $
                {expense.amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
