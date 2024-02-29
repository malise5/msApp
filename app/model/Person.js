Ext.define(
  "MsTraining.model.Person",
  {
    name: "Unknown",
    requires: ["MsTraining.util.Util", "MsTraining.util.Math"],

    constructor: function (name) {
      if (name) {
        this.name = name;
      }
    },

    eat: function (foodType) {
      MsTraining.util.Util.logInfo(this.name + " is eating: " + foodType);
      MsTraining.util.Math.add(2, 5);
      //   console.log(this.name + " is eating: " + foodType);
    },
  },
  function () {
    var bob = Ext.create("MsTraining.model.Person", "Bob");
    bob.eat("Salad");
  }
);
