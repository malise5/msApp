Ext.define("MsTraining.view.summary.SummaryTestGrid", {
  extend: "Ext.grid.Panel",
  xtype: "summaryTestGrid",
  width: 1000,
  height: 500,
  title: "Summary Test",
  style: "padding: 20px",
  //   renderTo: Ext.getBody(),
  features: [
    {
      ftype: "summary",
    },
  ],
  store: {
    type: "testResultStore",
  },
  plugins: {
    cellediting: {
      clicksToEdit: 2,
    },
  },
  columns: [
    {
      dataIndex: "student",
      text: "Name",
      summaryType: "count",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format(
          "{0} student{1}",
          value,
          value !== 1 ? "s" : ""
        );
      },
      flex: 1,
      editor: "textfield",
    },
    {
      dataIndex: "mark",
      text: "Mark",
      summaryType: "average",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format("Average: {0}", value.toFixed(2));
      },
      flex: 1,
      editor: "numberfield",
    },
    {
      dataIndex: "mark",
      text: "Count",
      summaryType: "count", // Example of using count summary type
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format("Count: {0}", value);
      },
      flex: 1,
    },
    {
      dataIndex: "mark",
      text: "sum",
      summaryType: "sum", // Example of using sum summary type
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format("Sum: {0}", value);
      },
      flex: 1,
    },
    {
      dataIndex: "mark",
      text: "min",
      summaryType: "min", // Example of using min summary type
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format("Min: {0}", value);
      },
      flex: 1,
    },
    {
      dataIndex: "mark",
      text: "max",
      summaryType: "max", // Example of using max summary type
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format("Max: {0}", value);
      },
      flex: 1,
    },
  ],

  //   columns: [
  //     {
  //       dataIndex: "student",
  //       text: "Name",
  //       summaryType: "count",
  //       summaryRenderer: function (value, summaryData, dataIndex) {
  //         return Ext.String.format(
  //           "{0} student{1}",
  //           value,
  //           value !== 1 ? "s" : ""
  //         );
  //       },
  //     },
  //     {
  //       dataIndex: "mark",
  //       text: "Mark",
  //       summaryType: "average",
  //     },
  //   ],
});
