Ext.define("MsTraining.store.Cities", {
  extend: "Ext.data.Store",
  alias: "store.cities",
  model: "MsTraining.model.City",
  data: [
    {
      id: 1,
      name: "Nairobi",
      phone: "254525452",
      age: 200,
    },
    {
      id: 1,
      name: "Moyale",
      phone: "2545254452",
      age: 20,
    },
  ],
});
