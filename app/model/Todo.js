Ext.define("MsTraining.model.Todo", {
  extend: "Ext.data.Model",

  idProperty: "id",
  fileds: ["id", "userId", "title", "completed"],

  proxy: {
    type: "ajax", //rest, ajax
    url: "https://jsonplaceholder.typicode.com/todos",
    reader: {
      type: "json",
      // rootProperty: "",
    },
  },
});
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
