Ext.define("MsTraining.view.demo.FormFieldsDemoController", {
  extend: "Ext.app.ViewController",
  alias: "controller.formfieldsdemocontroller",
  onSaveClicked: function (btn, e, eOpts) {
    //get all values of the form
    //submit to json place holder => backend
    //add the new items to the grid
    let window = this.getView();
    let references = window.getReferences();
    let form = references["formdemo"].getForm();

    if (form.isValid()) {
      //send ajax request to submit post
      form.submit({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (form, action) {
          //add the record to the posts server
          Ext.Msg.alert("Success", action.result.msg);
        },
        failure: function (form, action) {
          //handle failure
          Ext.Msg.alert("Failed", action.result.msg);
        },
      });
    } else {
      //alert error
      Ext.Msg.alert("Invalid Data", "Please correct form errors");
    }
  },
});
