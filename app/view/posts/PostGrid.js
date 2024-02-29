Ext.define("MsTraining.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  controller: "postgridviewcontroller",
  store: {
    type: "posts",
  },
  tbar: [
    {
      text: "Add Post",
      listeners: {
        click: "onAddPostClicked",
      },
    },
  ],
  columns: [
    { dataIndex: "id", text: "ID" },
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
  height: 900,
});
