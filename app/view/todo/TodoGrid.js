Ext.define("MsTraining.view.posts.TodoGrid", {
  extend: "Ext.grid.Panel",
  xtype: "todogrid",
  store: {
    type: "todos",
  },
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 2 },
    { dataIndex: "completed", text: "Completed", flex: 1 },
    { dataIndex: "userId", text: "User ID" },
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

// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
