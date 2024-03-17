Ext.define("MsTraining.store.accounts.CapitalStore", {
  extend: "Ext.data.Store",
  alias: "store.capitalstore",
  model: "MsTraining.model.TrialBalance",
  filterByCategory: function (category) {
    this.clearFilter();
    this.filter("category", category);
  },
});
