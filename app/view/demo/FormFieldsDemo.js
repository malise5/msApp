Ext.define("MsTraining.view.demo.FormFieldsDemo", {
  extend: "Ext.window.Window",
  xtype: "formfieldsdemo",
  title: "My FormField",
  controller: "formfieldsdemocontroller",
  height: 600,
  width: 600,
  autoShow: true,
  closable: true,
  draggable: false,
  modal: true,
  items: [
    {
      xtype: "form",
      reference: "formdemo",
      // jsonSubmit: true,
      defaults: {
        anchor: "90%",
      },
      items: [
        {
          boxLabel: "Remember Me",
          xtype: "checkbox",
          name: "remember",
          inputValue: "1",
        },
        {
          xtype: "combobox",
          fieldLabel: "Gender",
          name: "gender",
          store: {
            type: "genders",
          },
          valueField: "id",
          displayField: "value",
        },
        {
          xtype: "combobox",
          fieldLabel: "Posts",
          name: "postId",
          store: {
            type: "posts",
          },
          valueField: "id",
          displayField: "title",
        },
        {
          xtype: "datefield",
          fieldLabel: "From",
          allowBlank: true,
          name: "fromDate",
          format: "Y-m-d",
          maxValue: new Date(),
        },
        {
          xtype: "numberfield",
          fieldLabel: "Number",
          name: "numberInput",
          allowBlank: false,
          minValue: 0,
          maxValue: 100,
        },
        {
          xtype: "timefield",
          fieldLabel: "Time",
          name: "timeInput",
          format: "H:i:s",
          minValue: "00:00:00",
          maxValue: "23:59:59",
        },
        {
          xtype: "filefield",
          name: "photo",
          fieldLabel: "Photo",
          labelWidth: 100,
          msgTarget: "side",
          allowBlank: false,
          buttonText: "Select Photo...",
        },
        {
          xtype: "htmleditor",
          name: "body",
          fieldLabel: "Body",
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: "onSaveClicked",
    },
  ],
});
