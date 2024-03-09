Ext.define("MsTraining.view.posts.TodoGrid", {
  extend: "Ext.grid.Panel",
  xtype: "todogrid",
  reference: "todogrid",
  controller: "todogridcontroller",
  store: {
    type: "todos",
  },
  columns: [
    { dataIndex: "_id", text: "ID", flex: 1 },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "completed", text: "Completed", flex: 1 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  tbar: [
    {
      text: "Add Todo",
      handler: "onAddTodo",
    },
    {
      text: "View Todo",
      handler: "onViewTodo",
      bind: {
        disabled: "{!todogrid.selection}",
      },
    },
  ],
});
