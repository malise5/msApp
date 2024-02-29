Ext.define("MsTraining.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",
  title: "Add Post",
  height: 250,
  width: 520,
  style: {
    margin: "20px", // Adjust the margin as needed
  },
  closable: true,
  modal: true,
  items: [
    {
      xtype: "form",
      items: [
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Post ID",
          name: "id",
          emptyText: "Post id",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Title",
          name: "tittle",
          emptyText: "tittle",
        },
        {
          allowBlank: false,
          xtype: "datefield",
          fieldLabel: "Published Date",
          name: "date",
          emptyText: "date",
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Cancel",
    },
    {
      text: "Save",
    },
  ],
});
