Ext.define("MsTraining.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  reference: "postgrid",
  controller: "postgridviewcontroller",
  store: {
    type: "posts",
  },
  tbar: [
    {
      text: "Add Post",
      iconCls: "fas fa-plus",
      listeners: {
        click: "onAddPostClicked",
      },
    },
    {
      text: "Edit Post",
      iconCls: "fas fa-pencil-alt",
      listeners: {
        click: "onEditClicked",
      },
    },
    {
      text: "Delete Post",
      iconCls: "fas fa-trash-alt",
      listeners: {
        click: "onDeleteClicked",
      },
    },
    {
      text: "Form fields",
      listeners: {
        click: "onFormFieldsClicked",
      },
    },
    {
      text: "Layouts",
      listeners: {
        click: "onLayoutsClicked",
      },
    },
  ],
  columns: [
    { dataIndex: "_id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 2, sortable: false },
    { dataIndex: "userId", text: "User ID", sortable: false },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  // height: 900,
});
