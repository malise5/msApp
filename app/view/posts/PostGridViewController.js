Ext.define("MsTraining.view.posts.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",
  onAddPostClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    //new window pop up
    // Ext.onReady(function () {
    //   Ext.create({
    //     xtype: "postformwindow",
    //   });
    // });
    var wd = Ext.create({
      xtype: "postformwindow",
    });
    wd.show();
  },
  onFormFieldsClicked: function (btn, e, eOpts) {
    var wd = Ext.create({
      xtype: "formfieldsdemo",
    });
    wd.show();
  },
});
