Ext.define("MsTraining.view.users.User", {
  extend: "Ext.panel.Panel",
  xtype: "users",
  viewModel: {
    data: {
      record: null,
    },
  },
  items: [
    {
      xtype: "usergrid",
    },
    {
      xtype: "userdetailstab",
    },
  ],
});
