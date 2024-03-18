Ext.define("MsTraining.view.review.ReviewGrid", {
  extend: "Ext.grid.Panel",
  xtype: "reviewgrid",
  requires: ["MsTraining.util.Util"],
  store: {
    type: "users",
  },
  // layout: "fit",
  // height: 800,
  // plugins: {
  //   cellediting: {
  //     clicksToEdit: 1,
  //   },
  // },
  tbar: [
    {
      text: "Operations",
      menu: [
        {
          text: "Add new User",
          handler: function () {},
        },
        {
          text: "Add new User",
        },
        {
          text: "Add new User",
          menu: [
            {
              text: "Nested Sub Menu",
            },
          ],
        },
      ],
    },
    {
      fieldLabel: "Search",
      xtype: "textfield",
      listeners: {
        change: "onSearchKeyValueChange",
      },
    },
    {
      xtype: "datefield",
      emptyText: "startDate",
    },
    {
      xtype: "datefield",
      emptyText: "startDate",
    },
  ],

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
    {
      dataIndex: "price",
      text: "Price",
      flex: 1,
      renderer: function (value) {
        // Check if the value is positive or negative
        if (value >= 0) {
          // Format positive price with green color
          return `<div style="color:green">${Ext.util.Format.usMoney(
            value
          )}</div>`;
        } else {
          // Format negative price with red color
          return `<div style="color:red">${Ext.util.Format.usMoney(
            value
          )}</div>`;
        }
      },
    },
  ],
  // tbar: [
  //   {
  //     text: "Add User",
  //   },
  //   {
  //     text: "Model Binding",
  //     handler: "onModelBinding",
  //   },
  //   // "->",
  //   {
  //     xtype: "tbfill",
  //   },
  //   {
  //     text: "Show Details",
  //     // toggle: true,
  //     // enableToggle: true,
  //     handler: "onShowDetails",
  //     bind: {
  //       disabled: "{!usergrid.selection}",
  //     },
  //   },
  // ],

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

// store: {
//   type: "users",
// },
// bind: "{users}",
// columns: [
//   { dataIndex: "_id", text: "ID", flex: 1 },
//   { dataIndex: "title", text: "Title", flex: 1 },
//   { dataIndex: "body", text: "Body", flex: 1, sortable: false },
//   { dataIndex: "userId", text: "User ID", flex: 1, sortable: false },
// ],
