Ext.define("MsTraining.view.todo.TodoGridController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridcontroller",

  onAddTodo: function (btn, e, eOpts) {
    Ext.create({
      xtype: "todoform",
      viewModel: {
        data: {
          newTitle: "Add New Todo",
        },
      },
    });
  },
  onViewTodo: function (btn, e, eOpts) {
    // let grid = this.getView(),
    let record = this.getSelectedRecordByXType("todogrid");
    Ext.create({
      xtype: "todoform",
      viewModel: {
        data: {
          newTitle: "Update Todo",
          record: record,
        },
      },
    });
  },
});
