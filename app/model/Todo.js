Ext.define("MsTraining.model.Todo", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: ["_id", "title", "completed", "userId"],

  proxy: {
    type: "rest", //rest, ajax
    url: "http://localhost:3000/todos",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalproperty: "totalCount",
    },
  },
});
