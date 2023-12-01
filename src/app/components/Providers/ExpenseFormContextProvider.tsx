import ExpenseFormContainer from "../Containers/ExpenseFormContainer";
import { ExpenseFormProvider } from "@context/ExpenseFormProvider";

const ExpenseFormContextProvider = <T extends {}>(props: T) => {
  return (
    <ExpenseFormProvider>
      <ExpenseFormContainer {...props} />
    </ExpenseFormProvider>
  );
};

export default ExpenseFormContextProvider;
