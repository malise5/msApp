Ext.define("MsTraining.model.TestResult", {
  extend: "Ext.data.Model",
  fields: [
    "student",
    {
      name: "mark",
      type: "int",
    },
  ],
});
