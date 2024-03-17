Ext.define("MsTraining.model.TrialBalance", {
  extend: "Ext.data.Model",
  fields: [
    { name: "accountCode", type: "string" },
    { name: "accountName", type: "string" },
    { name: "debit", type: "float" },
    { name: "credit", type: "float" },
    { name: "category", type: "string" }, // Add a category field to categorize accounts
  ],
});

// Ext.define("MsTraining.model.TrialBalance", {
//   extend: "Ext.data.Model",

//   fields: [
//     { name: "accountCode", type: "string" },
//     { name: "accountName", type: "string" },
//     { name: "debit", type: "float" },
//     { name: "credit", type: "float" },
//   ],
// });
