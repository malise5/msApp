Ext.define("MsTraining.view.layouts.HBoxVboxLayout", {
  extend: "Ext.window.Window",
  xtype: "hboxvboxlayout",

  // Window configuration
  title: "HBox VBox Layout",
  height: 600,
  width: 900,
  autoShow: true,
  closable: true,
  modal: true,

  // Panel configuration
  items: [
    {
      xtype: "panel",
      layout: "hbox",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Firs Name",
        },
        {
          xtype: "textfield",
          fieldLabel: "Last Name",
        },
      ],
    },
    {
      xtype: "panel",
      layout: "vbox",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Firs Name",
        },
        {
          xtype: "textfield",
          fieldLabel: "Last Name",
        },
      ],
    },
  ],
});
