import { type CommandClickEventArgs } from "@syncfusion/ej2-react-grids";
import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import "@syncfusion/ej2-react-grids/styles/material.css";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

const UserTable: React.FC<Props> = ({ users, onDelete }) => {
  const commands = [
    {
      type: "Delete" as const,
      buttonOption: {
        content: "Excluir",
        cssClass: "e-flat e-danger",
      },
    },
  ];

  const handleCommandClick = (args: CommandClickEventArgs) => {
    const userId = (args.rowData as User)?.id;

    if (userId !== undefined) {
      onDelete(userId);
    }
  };

  return (
    <GridComponent
      dataSource={users}
      allowPaging
      pageSettings={{ pageSize: 5 }}
      style={{ marginTop: "20px" }}
      commandClick={handleCommandClick}
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
        <ColumnDirective headerText="Ações" width="120" commands={commands} />
      </ColumnsDirective>
      <Inject services={[Page, CommandColumn]} />
    </GridComponent>
  );
};

export default UserTable;
