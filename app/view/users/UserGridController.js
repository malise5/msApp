Ext.define("MsTraining.view.users.UserGridController", {
  extend: "Ext.app.ViewController",
  alias: "controller.usergridcontroller",
  init: function () {
    let grid = this.getView();
    let store = grid.getStore();
    store.load();
  },
  onUserGridCellClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    console.log();
    let postStore = Ext.ComponentQuery.query("postgrid")[0].getStore();
    let todosStore = Ext.ComponentQuery.query("todogrid")[0].getStore();
    console.log(todosStore);

    postStore.reload({
      params: {
        userId: record.get("_id"),
      },
    });
    todosStore.reload({
      params: {
        userId: record.get("_id"),
      },
    });
  },
  onShowDetails: function (btn, e, eOpts) {
    let userGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("staticpanel")[0];
    if (userGrid.getHeight() === 1200) {
      userGrid.setHeight(600);
      lowerPanel.setHeight(600);
      btn.setText("Hide Details");
    } else {
      userGrid.setHeight(1200);
      lowerPanel.setHeight(0);
      btn.setText("Show Details");
    }
  },
});
