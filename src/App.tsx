// src/app/App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "@/application/config/redux/store";
import ExpenseTracker from "./app/containers/ExpenseTracker/ExpenseTracker";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Expenses</h1>
        <ExpenseTracker />
      </div>
    </Provider>
  );
};

export default App;
