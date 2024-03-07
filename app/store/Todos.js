Ext.define("MsTraining.store.Todos", {
  extend: "Ext.data.Store",
  alias: "store.todos",
  model: "MsTraining.model.Todo",
  requires: "MsTraining.model.Todo",
});
