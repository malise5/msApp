/**
 * This class defines the main view for the application. It serves as the primary interface
 * specified in app.js under the "mainView" property. This setting automatically applies the "viewport"
 * plugin, making this view the body element (i.e., the viewport).
 *
 * TODO - Customize this view according to the requirements of your application.
 */
Ext.define("MsTraining.view.main.Main", {
  extend: "Ext.container.Container",
  xtype: "app-main",

  requires: [
    "Ext.window.MessageBox",
    "MsTraining.view.main.MainController",
    "MsTraining.view.main.MainModel",
  ],

  plugins: "viewport", // Plugin to automatically set this container as the viewport
  controller: "main", // Controller handling this view
  viewModel: "main", // ViewModel associated with this view
  layout: {
    type: "border", // Using border layout for this container
  },

  items: [
    {
      xtype: "mainmenu",
      bind: {
        title: "{name}", // Binding title to a dynamic value from the associated ViewModel
      },
      region: "west", // Positioning this panel to the west side of the layout
      width: 250,
      split: true, // Enabling splitter to resize this panel
    },
    {
      // Positioning the tabpanel to the center of the layout
      region: "center",
      // Using a tabpanel to display multiple tabs
      xtype: "mainpanel",
    },
    {
      region: "south", // Positioning the footer component to the south side of the layout
      xtype: "appfooter", // Custom footer component
    },
    {
      region: "north", // Positioning the header component to the north side of the layout
      xtype: "appheader", // Custom header component
    },
  ],
});
