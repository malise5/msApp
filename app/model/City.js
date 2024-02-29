Ext.define(
  "MsTraining.model.City", // className => <AppName.folderName.ClassAndFileName>
  {
    extend: "Ext.data.Model",
    fields: [
      "id",
      "name",
      { name: "phone", type: "string" },
      { name: "age", type: "int" },
    ],
  }, //configuration/ properties
  function () {
    var city = Ext.create("MsTraining.model.City");
    console.log(city);
  }
);
