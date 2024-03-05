Ext.define("MsTraining.view.layouts.ColumnLayout", {
  extend: "Ext.window.Window",
  xtype: "columnlayout",

  // Window configuration
  title: "Column Layout",
  height: 600,
  width: 900,
  autoShow: true,
  closable: true,
  modal: true,

  // Panel configuration
  items: [
    {
      xtype: "panel",
      layout: "column",
      items: [
        // Posts Column
        {
          title: "Posts",
          columnWidth: 0.33,
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
                  emptyText: "User id",
                },
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Title",
                  name: "title",
                  emptyText: "Title",
                },
                {
                  allowBlank: false,
                  xtype: "textareafield",
                  fieldLabel: "Body",
                  name: "body",
                  emptyText: "Body",
                },
              ],
            },
          ],
        },
        // Todos Column
        {
          title: "Todos",
          columnWidth: 0.33,
          items: [
            {
              xtype: "form",
              reference: "todoform",
              itemId: "todoform",
              jsonSubmit: true,
              items: [
                {
                  allowBlank: true,
                  readOnly: true,
                  xtype: "textfield",
                  reference: "todoId",
                  fieldLabel: "Todo ID",
                  name: "id",
                  emptyText: "Todo id",
                },
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Title",
                  name: "title",
                  emptyText: "Title",
                },
              ],
            },
          ],
        },
        // Users Column
        {
          title: "Users",
          columnWidth: 0.33,
          items: [
            {
              xtype: "form",
              reference: "userform",
              itemId: "userform",
              jsonSubmit: true,
              items: [
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "User ID",
                  name: "userId",
                  emptyText: "User id",
                },
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Name",
                  name: "name",
                  emptyText: "Name",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
