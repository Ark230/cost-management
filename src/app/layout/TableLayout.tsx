import { Col, Row } from "antd";
import React from "react";

interface TableLayoutProps {
  tableHeader: JSX.Element;
  tableContent: JSX.Element;
}

const TableLayout = ({ tableHeader, tableContent }: TableLayoutProps) => {
  return (
    <Row>
      <Col span={24}>{tableHeader}</Col>

      <Col span={24}>{tableContent}</Col>
    </Row>
  );
};

export default TableLayout;
