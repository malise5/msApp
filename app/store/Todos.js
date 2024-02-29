Ext.define("MsTraining.store.Todos", {
  extend: "Ext.data.Store",
  alias: "store.todos",
  model: "MsTraining.model.Todo",
  requires: "MsTraining.model.Todo",
  autoLoad: true,
});

// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
