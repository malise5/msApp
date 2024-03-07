Ext.define("MsTraining.views.fmviews.StaticPanel", {
  extend: "Ext.tab.Panel",
  xtype: "staticpanel",
  height: 0,
  items: [
    {
      title: "Posts",
      items: [
        {
          xtype: "postgrid",
        },
      ],
    },
    {
      title: "Todos",
      items: [
        {
          xtype: "todogrid",
        },
      ],
    },
  ],
});
