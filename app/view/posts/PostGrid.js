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
      overflowHandler: "menu",
      items: [],
    },
    {
      fieldLabel: "Search",
      xtype: "textfield",
      listeners: {
        change: "onSearchKeyValueChange",
      },
    },
    // {
    //   xtype: "datefield",
    //   emptyText: "startDate",
    // },
    // {
    //   xtype: "datefield",
    //   emptyText: "startDate",
    // },
    {
      text: "Add Post",
      xtype: "button",
      iconCls: "fas fa-plus",
      listeners: {
        click: "onAddPostClicked",
      },
    },
    {
      text: "Add Post",
      xtype: "button",
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
      text: "VTypes",
      listeners: {
        click: "onVTypesClicked",
      },
    },
    {
      text: "Layouts",
      listeners: {
        click: "onLayoutsClicked",
      },
    },
    {
      fieldLabel: "Choose State",
      xtype: "combo",
      store: {
        type: "users",
      },
      queryMode: "local",
      displayField: "username",
      valueField: "_id",
      listeners: {
        change: "onUserSelectionChange",
        change: "onUserSelected",
      },
    },
  ],
  columns: [
    { dataIndex: "_id", text: "ID", flex: 1 },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 1, sortable: false },
    { dataIndex: "userId", text: "User ID", flex: 1, sortable: false },
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
