Ext.define("MsTraining.store.TrialBalanceStore", {
  extend: "Ext.data.Store",
  alias: "store.trialbalancestore",
  model: "MsTraining.model.TrialBalance",
  data: [
    // Sample data for trial balance
    {
      accountCode: "101",
      accountName: "Cash",
      debit: 500,
      credit: 0,
      category: "Assets",
    },
    {
      accountCode: "201",
      accountName: "Accounts Receivable",
      debit: 0,
      credit: 300,
      category: "Assets",
    },
    {
      accountCode: "301",
      accountName: "Inventory",
      debit: 200,
      credit: 0,
      category: "Assets",
    },
    {
      accountCode: "401",
      accountName: "Accounts Payable",
      debit: 0,
      credit: 200,
      category: "Liabilities",
    },
    {
      accountCode: "501",
      accountName: "Loans Payable",
      debit: 0,
      credit: 1000,
      category: "Liabilities",
    },
    {
      accountCode: "601",
      accountName: "Owner's Equity",
      debit: 1500,
      credit: 0,
      category: "Capital",
    },
  ],
  // Add method to filter data by category
  filterByCategory: function (category) {
    this.clearFilter();
    if (category !== "All") {
      this.filter("category", category);
    }
  },
  // Add method to calculate total balance
  calculateTotalBalance: function () {
    var totalDebit = 0,
      totalCredit = 0;

    this.each(function (record) {
      totalDebit += record.get("debit") || 0;
      totalCredit += record.get("credit") || 0;
    });

    return {
      totalDebit: totalDebit,
      totalCredit: totalCredit,
    };
  },
});
