import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
} from "@syncfusion/ej2-react-grids";
import "@syncfusion/ej2-react-grids/styles/material.css";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  return (
    <GridComponent
      dataSource={users}
      allowPaging
      pageSettings={{ pageSize: 5 }}
      style={{ marginTop: "20px" }}
    >
      <ColumnsDirective>
        <ColumnDirective
          field="id"
          headerText="ID"
          width="100"
          textAlign="Right"
        />
        <ColumnDirective field="name" headerText="Nome" width="150" />
        <ColumnDirective field="email" headerText="Email" width="200" />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  );
};

export default UserTable;
