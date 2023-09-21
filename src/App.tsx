// src/app/App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "@/application/config/redux/store";
import ExpenseTracker from "./app/containers/ExpenseTracker/ExpenseTracker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Santiago");

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
