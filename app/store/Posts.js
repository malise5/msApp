Ext.define("MsTraining.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "MsTraining.model.Post",
  storeId: "posts",
  requires: ["MsTraining.model.Post"],
  autoLoad: false, // => dont want it to load automatically
  sorters: ["id", "title"],
  // filters: {
  //   property: "userId",
  //   value: "10",
  // },
});
