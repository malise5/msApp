Ext.define("MsTraining.model.Post", {
  extend: "Ext.data.Model",

  idProperty: "id",
  fileds: ["id", "userId", "title", "body"],

  proxy: {
    type: "ajax", //rest, ajax
    url: "https://jsonplaceholder.typicode.com/posts",
    // url: "http://localhost:3000/posts",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
