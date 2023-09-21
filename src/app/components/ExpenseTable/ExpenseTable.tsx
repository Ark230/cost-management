import { Expense } from "@domain/entities/Expense";
import styles from "./ExpenseTable.module.scss";
import { Table, Space, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

export interface ExpenseTableProps {
  expenses: Expense[];
}

const columns: ColumnsType<Expense> = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Fecha de creación",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => dayjs(date).format("DD/MM/YYYY HH:mm"),
    sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
  },
  {
    title: "Categoría",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Monto",
    dataIndex: "amount",
    key: "amount",
    render: (amount) =>
      "$ " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  },
  {
    title: "Acciones",
    key: "action",
    render: (record) => {
      return (
        <Space>
          <DeleteOutlined />
          <span onClick={() => console.log("delete")}>Eliminar</span>
        </Space>
      );
    },
  },
];

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  return (
    <div style={{ maxHeight: "30rem", overflowY: "scroll" }}>
      <Table columns={columns} dataSource={expenses} />
      {/* <thead>
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
        </tbody> */}
    </div>
  );
};

export default ExpenseTable;
