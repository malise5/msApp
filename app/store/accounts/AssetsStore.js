Ext.define("MsTraining.store.accounts.AssetsStore", {
  extend: "Ext.data.Store",
  alias: "store.assetsstore",
  model: "MsTraining.model.TrialBalance",
  filterByCategory: function (category) {
    this.clearFilter();
    this.filter("category", category);
  },
});
