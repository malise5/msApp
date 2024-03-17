Ext.define("MsTraining.view.trialbalancegrid.TrialBalanceGrid", {
  extend: "Ext.grid.Panel",
  xtype: "trialbalancegrid",
  reference: "trialbalancegrid",
  title: "Trial Balance",

  //   viewModel: {
  //     type: "trialbalance",
  //   },
  controller: "trialbalance",
  store: {
    type: "trialbalancestore",
  },
  //   bind: {
  //     store: "{trialBalance}",
  //   },
  columns: [
    {
      text: "Account Code",
      dataIndex: "accountCode",
      flex: 1,
      editor: "textfield",
    },
    {
      text: "Account Name",
      dataIndex: "accountName",
      flex: 2,
      editor: "textfield",
    },
    { text: "Debit", dataIndex: "debit", flex: 1, editor: "numberfield" },
    { text: "Credit", dataIndex: "credit", flex: 1, editor: "numberfield" },
    { text: "Category", dataIndex: "category", hidden: true },
  ],
  selType: "cellmodel",
  plugins: {
    cellediting: {
      clicksToEdit: 1,
    },
  },
  listeners: {
    afterrender: "onGridRendered", // Define this function in your controller to filter the data
  },
  dockedItems: [
    {
      xtype: "toolbar",
      dock: "bottom",
      items: [
        { xtype: "label", text: "Total Debit: ", style: "font-weight:bold" },
        {
          xtype: "label",
          itemId: "totalDebitLabel",
          text: "0",
          style: "font-weight:bold",
        },
        { xtype: "label", text: "Total Credit: ", style: "font-weight:bold" },
        {
          xtype: "label",
          itemId: "totalCreditLabel",
          text: "0",
          style: "font-weight:bold",
        },
      ],
    },
  ],
});
