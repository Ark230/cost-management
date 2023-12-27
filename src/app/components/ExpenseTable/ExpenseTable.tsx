import { Expense } from "@domain/entities/Expense";
import { Space, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { ExpensesSharingService } from "@utils/subject-instances";
import { TableLayout } from "@/app/layout";
import ContentTable from "@components/ContentTable/ContentTable";

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
          <EditOutlined />
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              ExpensesSharingService.setSubject({ updateExpense: record })
            }
          >
            Editar
          </span>
        </Space>
      );
    },
  },
];

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  return (
    <div style={{ maxHeight: "30rem", overflowY: "scroll" }}>
      <TableLayout
        tableHeader={
          <Button
            onClick={() => {
              ExpensesSharingService.setSubject({ createExpense: true });
            }}
          >
            Crear Gasto
          </Button>
        }
        tableContent={<ContentTable columns={columns} dataSource={expenses} />}
      />
    </div>
  );
};

export default ExpenseTable;
