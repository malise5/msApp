Ext.define("MsTraining.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",
  controller: "postformwindowcontroller",
  title: "Add Post",
  height: 250,
  width: 520,
  bodyPadding: 10,
  closable: true,
  modal: true,
  items: [
    {
      xtype: "form",
      reference: "postform",
      itemId: "postform",
      jsonSubmit: true,
      items: [
        {
          allowBlank: true,
          readOnly: true,
          xtype: "textfield",
          reference: "postId",
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
          xtype: "textareafield",
          fieldLabel: "Body",
          name: "body",
          emptyText: "body",
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Clear",
      handler: "onClearClick",
    },
    {
      text: "Save",
      handler: "onSaveClick",
    },
  ],
});
