Ext.define("MsTraining.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "MsTraining.model.User",
  proxy: {
    type: "rest",
    // url: "https://jsonplaceholder.typicode.com/users",
    url: "http://localhost:3000/users",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalproperty: "totalCount",
    },
  },
});
