Ext.define("MsTraining.controller.trialbalancegrid.TrialBalanceController", {
  extend: "Ext.app.ViewController",
  alias: "controller.trialbalance",

  //
  init: function () {
    this.control({
      trialbalancegrid: {
        edit: "onGridEdit",
      },
    });
  },
  onGridRendered: function (grid) {
    var store = grid.getStore();
    this.updateTotalLabels(store);
  },

  updateTotalLabels: function (store) {
    var totalBalance = store.calculateTotalBalance();
    var totalDebitLabel = this.getView().down("#totalDebitLabel");
    var totalCreditLabel = this.getView().down("#totalCreditLabel");
    var isBalanced = totalBalance.totalDebit === totalBalance.totalCredit;

    if (totalDebitLabel && totalCreditLabel) {
      totalDebitLabel.setText(totalBalance.totalDebit);
      totalCreditLabel.setText(totalBalance.totalCredit);

      // Style the labels based on balance
      totalDebitLabel.setStyle(
        "color:" + (isBalanced ? "green" : "red") + "; font-weight:bold;"
      );
      totalCreditLabel.setStyle(
        "color:" + (isBalanced ? "green" : "red") + "; font-weight:bold;"
      );
    }
  },

  onGridEdit: function (editor, e) {
    var grid = this.getView();
    var store = grid.getStore();
    var totalDebitLabel = grid.down("#totalDebitLabel");
    var totalCreditLabel = grid.down("#totalCreditLabel");

    // Update store data
    store.sync();

    // Recalculate total and update labels
    this.updateTotalLabels(store);
  },
});
