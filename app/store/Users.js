Ext.define("MsTraining.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "MsTraining.model.User",
  storeId: "users",
  autoLoad: true,
});
