Ext.define("MsTraining.view.posts.PostFormWindowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postformwindowcontroller",
  init: function () {},
  onClearClick: function (btn, e, eOpts) {
    //close the form
    //reset the form
  },
  onSaveClick: function (btn, e, eOpts) {
    //get all values of the form
    //submit to json place holder => backend
    //add the new items to the grid
    let window = this.getView();
    let references = window.getReferences();
    let form = references["postform"].getForm();

    if (form.isValid()) {
      //send ajax request to submit post
      form.submit({
        method: "POST",
        url: "http://localhost:3000/posts",
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
