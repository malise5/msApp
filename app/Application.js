/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("MsTraining.Application", {
  extend: "Ext.app.Application",

  name: "MsTraining",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
  launch: function (profile) {
    // Declare a variable to store whether the user is logged in
    var loggedIn;

    // Retrieve the user's login status from the local storage
    loggedIn = localStorage.getItem("MsAppLoggedIn");

    // Create and display the appropriate view based on the user's login status
    // If the user is logged in, display the main application view ("app-main")
    // If not logged in, display the login view
    // Ext.widget(loggedIn ? "app-main" : "login");

    Ext.create({
      xtype: loggedIn ? "app-main" : "login",
    });
  },
});
