Ext.define("MyApp.view.employee.EmployeeGrid", {
  extend: "Ext.grid.Panel",
  xtype: "employeeGrid",
  title: "Employees",
  store: {
    type: "employeeStore",
  },
  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Seniority", dataIndex: "seniority", flex: 1 },
    { text: "Department", dataIndex: "department", flex: 1 },
  ],
  features: [{ ftype: "grouping" }],
  renderTo: Ext.getBody(),
});
