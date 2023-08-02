import axios from "axios";
import expensesNetwork from "./expenses";

const clientApiApp = axios.create();

export const expenses = expensesNetwork(clientApiApp);
