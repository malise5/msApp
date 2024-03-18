Ext.define("MsTraining.view.users.UserGridController", {
  extend: "Ext.app.ViewController",
  alias: "controller.usergridcontroller",
  init: function () {
    let grid = this.getView();
    let store = grid.getStore();
    store.load();
  },

  onShowDetails: function (btn, e, eOpts) {
    let userGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("userdetailstab")[0];
    if (userGrid.getHeight() === 600) {
      userGrid.setHeight(400);
      lowerPanel.setHeight(400);
      btn.setText("Hide Details");
    } else {
      userGrid.setHeight(600);
      lowerPanel.setHeight(0);
      btn.setText("Show Details");
    }
  },
  onModelBinding: function (btn, e, eOpts) {
    Ext.create({
      xtype: "modelbindingform",
    });
  },
  onUserGridCellDblClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    console.log(record.get("username"));
  },

  onUserGridCellContextMenu: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {},
  onSelectUser: function (grid, record, index, eOpts) {
    let me = this,
      view = me.getView(),
      vm = me.getViewModel,
      refs = me.getReferences();
    let record = grid.getSTore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
  },
});
