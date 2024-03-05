Ext.define("MsTraining.view.layouts.Borderlayout", {
  extend: "Ext.window.Window",
  xtype: "borderlayout",

  // Window configuration
  title: "HBox VBox Layout",
  height: 600,
  width: 900, // Adjusted width to fit the layout
  autoShow: true,
  closable: true,
  modal: true,

  // Panel configuration
  layout: "fit", // Use fit layout to ensure the border layout fills the window
  items: [
    {
      xtype: "panel",
      layout: "border",
      height: 580,
      width: 880,
      items: [
        {
          title: "South Region is resizable",
          region: "south",
          xtype: "panel",
          height: 100,
          split: true,
          margin: "0 5 5 5", // Corrected margin property
        },
        {
          title: "North Region is resizable",
          region: "north",
          xtype: "panel",
          height: 100,
          split: true,
          margin: "0 5 5 5", // Corrected margin property
        },
        {
          title: "East Region is resizable",
          region: "east",
          xtype: "panel",
          width: 100,
          split: true,
          margin: "0 5 5 5", // Corrected margin property
        },
        {
          title: "West Region is collapsible",
          region: "west",
          xtype: "panel",
          width: 200,
          collapsible: true,
          //   split: true,
          margin: "5 0 0 5", // Corrected margin property
          id: "west-region-container",
          layout: "fit",
        },
        {
          title: "Centre Region",
          region: "center", // Corrected region name
          xtype: "panel",
          margin: "5 5 0 0", // Corrected margin property
          layout: "fit",
        },
      ],
    },
  ],
});
