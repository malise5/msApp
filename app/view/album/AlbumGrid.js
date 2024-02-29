Ext.define("MsTraining.view.album.AlbumGrid", {
  extend: "Ext.grid.Panel",
  xtype: "albumgrid",
  store: {
    type: "albums",
  },
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 2 },
    { dataIndex: "userId", text: "User ID", flex: 1 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  height: 900,
});
