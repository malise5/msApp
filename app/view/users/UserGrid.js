Ext.define("MsTraining.view.users.UserGrid", {
  extend: "Ext.grid.GridPanel",
  xtype: "usergrid",
  controller: "usergridcontroller",
  title: "Users",

  store: {
    type: "users",
  },
  layout: "fit",
  height: 1200,
  columns: [
    {
      dataIndex: "_id",
      text: "ID",
      flex: 1,
    },
    {
      dataIndex: "name",
      text: "Name",
      flex: 1,
    },
    {
      dataIndex: "username",
      text: "Username",
      flex: 1,
    },
    {
      dataIndex: "email",
      text: "Email",
      flex: 1,
    },
    {
      dataIndex: "street",
      text: "Street",
      flex: 1,
    },
    {
      dataIndex: "suite",
      text: "Suite",
      flex: 1,
    },
    {
      dataIndex: "city",
      text: "City",
      flex: 1,
    },
    {
      dataIndex: "zipcode",
      text: "Zipcode",
      flex: 1,
    },
  ],
  tbar: [
    {
      text: "Add User",
    },
    "->",
    {
      text: "Show Details",
      // toggle: true,
      // enableToggle: true,
      handler: "onShowDetails",
    },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  listeners: {
    cellclick: "onUserGridCellClick",
  },
});
