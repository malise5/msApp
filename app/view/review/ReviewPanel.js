Ext.define("MsTraining.view.review.ReviewPanel", {
  extend: "Ext.panel.Panel",
  xtype: "reviewpanel",
  controller: "reviewpanelcontroller",
  viewModel: {
    type: "reviewviewmodel",
  },

  items: [
    {
      xtype: "reviewgrid",
    },
  ],
});
