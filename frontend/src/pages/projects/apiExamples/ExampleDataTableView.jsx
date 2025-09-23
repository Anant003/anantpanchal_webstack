import React from "react";
import Table from "../../../components/Table";
import { ApiTableColumns, ApiTableData } from "../../../data/ApiTable";

function ExampleDataTableView() {
  return (
    <div>
      <h1 id="main-heading">API Examples</h1>
      <p>
        Below are diffrent examples of fetching and displaying API data using
        React
      </p>
      <Table
        columns={ApiTableColumns}
        rowData={ApiTableData}
        linkColumn="name"
        linkPath="/apiExampleView"
        tableLabel="main-heading"
      />
    </div>
  );
}

export default ExampleDataTableView;
