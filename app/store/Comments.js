Ext.define("MsTraining.store.Comments", {
  extend: "Ext.data.Store",
  alias: "store.comments",
  model: "MsTraining.model.Comment",
  //   requires: "MsTraining.model.Comment",
  autoLoad: true,
});
