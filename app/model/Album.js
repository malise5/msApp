Ext.define("MsTraining.model.Album", {
  extend: "Ext.data.Model",

  idProperty: "id",
  fileds: ["id", "userId", "title"],

  proxy: {
    type: "ajax", //rest, ajax
    url: "https://jsonplaceholder.typicode.com/albums",
    reader: {
      type: "json",
      // rootProperty: "",
    },
  },
});
