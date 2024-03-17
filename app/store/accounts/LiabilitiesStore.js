Ext.define("MsTraining.store.accounts.LiabilitiesStore", {
  extend: "Ext.data.Store",
  alias: "store.liabilitiesstore",
  model: "MsTraining.model.TrialBalance",
  filterByCategory: function (category) {
    this.clearFilter();
    this.filter("category", category);
  },
});
