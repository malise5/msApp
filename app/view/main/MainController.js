/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MsTraining.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",
  routes: {
    home: "onHomeRoute",
  },
  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
  onLogout: function () {
    //Remove the localSTorage key./value
    localStorage.removeItem("MsAppLoggedIn");
    //remove main view
    this.getView().destroy();

    //add the login window
    Ext.widget("login");
  },
  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },
  onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
    let mainPanel = this.getMainPanel();
    let activeTab = mainPanel.items.findBy(
      (tabItem) => tabItem.title === record.get("text")
    );
    if (!activeTab && record.get("leaf")) {
      //create new tab using details from the record
      activeTab = mainPanel.add({
        closable: true,
        xtype: record.get("className"),
        title: record.get("text"),
        iconCls: record.get("iconCls"),
      });
    }
    mainPanel.setActiveTab(activeTab);
  },
});
