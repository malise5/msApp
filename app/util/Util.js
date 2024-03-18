Ext.define("MsTraining.util.Util", {
  statics: {
    logInfo: function (message) {
      console.log(message);
    },
    formatNumber: function (v) {
      // return "$" + v;
      let v1 = new Number(v);

      if (v1 > 0) {
        let formatted = Ext.util.Format.number(v, "###,###.00");
        return `<h1 style="color:green">${formatted}</h1>`;
      } else {
        let formatted = Ext.util.Format.number(v, "###,###.00");
        return `<h1 style="color:red">${formatted}</h1>`;
      }
    },
  },
});
