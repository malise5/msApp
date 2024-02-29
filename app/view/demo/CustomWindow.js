Ext.define("MyApp.view.demo.CustomWindow", {
  extend: "Ext.window.Window",
  xtype: "customwindow",
  title: "My Title",
  height: 200,
  width: 520,
  autoShow: true,
  closable: true,
  maximizable: true,
  draggable: false,
  modal: true,
});
// Ext.onReady(function () {
//   Ext.create("MyApp.view.demo.CustomWindow");
// });
