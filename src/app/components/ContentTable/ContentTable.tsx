import { Table } from "antd";

interface ContentTable {
  columns: any;
  dataSource: any;
}

const ContentTable = ({ columns, dataSource }: ContentTable) => {
  return <Table columns={columns} dataSource={dataSource}></Table>;
};

export default ContentTable;
