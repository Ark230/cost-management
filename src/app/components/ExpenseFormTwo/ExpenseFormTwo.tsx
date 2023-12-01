import { useEffect, useState } from "react";
import { Expense } from "@/domain/entities/Expense";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { useDispatch } from "react-redux";
import { updateExpense } from "@redux/types";
import useExpenseFormContext from "@hooks/context-hooks/useExpenseFormContext";

const ExpenseFormTwo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    expenseFormData,
    expenseFormData: {
      currentExpense: expense,
      management: { currentManagement },
      modal: { createOrUpdate },
    },
    setExpenseFormData,
  } = useExpenseFormContext();

  useEffect(() => {
    if (expense) {
      form.setFieldValue("name", expense.name);
      form.setFieldValue("category", expense.category);
      form.setFieldValue("amount", expense.amount);
    }
  }, [expense]);

  const onFinish = (formValues: Partial<Expense>) => {
    const newExpense: Partial<Expense> = {
      id: expense!.id,
      name: formValues.name,
      amount: formValues.amount,
      category: formValues.category,
    };

    dispatch(updateExpense(newExpense));
  };

  const isLoading = currentManagement ? currentManagement.isLoading : false;
  const submitText = createOrUpdate === "update" ? "Guardar" : "Crear";

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Nombre" name="name">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Categoría" name="category">
        <Select>
          <Select.Option>Videojuegos</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Monto" name="amount">
        <Input size="large" type="number" />
      </Form.Item>

      <Row justify="end">
        <Space>
          <Col>
            <Button
              onClick={() =>
                setExpenseFormData({
                  ...expenseFormData,
                  modal: { ...expenseFormData.modal, isModalOpen: false },
                })
              }
            >
              Cancelar
            </Button>
          </Col>
          <Col>
            <Form.Item style={{ margin: 0 }}>
              <Button loading={isLoading} type="primary" htmlType="submit">
                {submitText}
              </Button>
            </Form.Item>
          </Col>
        </Space>
      </Row>
    </Form>
  );
};

export default ExpenseFormTwo;
