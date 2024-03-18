Ext.define("MsTraining.view.users.UserGrid", {
  extend: "Ext.grid.GridPanel",
  xtype: "usergrid",
  reference: "usergrid",
  controller: "usergridcontroller",
  // title: "Users",
  requires: ["MsTraining.util.Util"],

  store: {
    type: "users",
  },
  layout: "fit",
  height: 400,
  plugins: {
    cellediting: {
      clicksToEdit: 1,
    },
  },
  selModel: {
    selType: "cellboxmodel",
    // mode: "MULTI",
  },
  selModel: {
    selType: "checkboxmodel",
    // mode: "MULTI",
  },

  columns: [
    { xtype: "rownumberer" },
    {
      dataIndex: "_id",
      text: "ID",
      flex: 1,
    },
    {
      dataIndex: "name",
      text: "Name",
      flex: 1,
      editor: "textfield",
    },
    {
      dataIndex: "username",
      text: "Username",
      flex: 1,
      editor: "textfield",
    },
    {
      dataIndex: "email",
      text: "Email",
      flex: 3,
      renderer: function (value) {
        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
      },
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
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
    {
      text: "Model Binding",
      handler: "onModelBinding",
    },
    // "->",
    {
      xtype: "tbfill",
    },
    {
      text: "Show Details",
      // toggle: true,
      // enableToggle: true,
      handler: "onShowDetails",
      bind: {
        disabled: "{!usergrid.selection}",
      },
    },
  ],

  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  listeners: {
    cellclick: "onUserGridCellClick",
    celldblclick: "onUserGridCellDblClick",
    cellcontextmenu: "onUserGridCellContextMenu",
  },
});
