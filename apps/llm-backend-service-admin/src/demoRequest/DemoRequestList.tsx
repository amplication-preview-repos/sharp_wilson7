import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DemoRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DemoRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="preferredTime" source="preferredTime" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
