// /**
//  * This shows an example of a common shopping cart checkout form. It demonstrates uses
//  * of FieldContainer and various layouts for arranging and aligning fields, ComboBox
//  * fields for state and month selection, and listening to change events to automatically
//  * copy values from Mailing Address to Billing Address fields.
//  */
// Ext.define("KitchenSink.view.form.Checkout", {
//   extend: "Ext.form.Panel",
//   xtype: "form-checkout",
//   controller: "form-checkout",

//   requires: ["KitchenSink.model.State", "KitchenSink.store.States"],

//   title: "Complete Check Out",
//   width: 620,
//   bodyPadding: 10,
//   frame: true,

//   fieldDefaults: {
//     labelAlign: "right",
//     labelWidth: 90,
//     msgTarget: Ext.supports.Touch ? "side" : "qtip",
//   },

//   items: [
//     {
//       xtype: "fieldset",
//       title: "Payment",

//       layout: "anchor",
//       defaults: {
//         anchor: "100%",
//       },

//       items: [
//         {
//           xtype: "radiogroup",

//           layout: {
//             autoFlex: false,
//           },

//           defaults: {
//             name: "ccType",
//             margin: "0 15 0 0",
//           },

//           items: [
//             {
//               boxLabel: "VISA",
//               inputValue: "visa",
//               checked: true,
//             },
//             {
//               boxLabel: "MasterCard",
//               inputValue: "mastercard",
//             },
//             {
//               boxLabel: "American Express",
//               inputValue: "amex",
//             },
//             {
//               boxLabel: "Discover",
//               inputValue: "discover",
//             },
//           ],
//         },
//         {
//           xtype: "textfield",
//           fieldLabel: "Name On Card",
//           name: "ccName",

//           labelWidth: 110,
//           allowBlank: false,
//         },
//         {
//           xtype: "container",
//           layout: "hbox",
//           margin: "0 0 5 0",

//           items: [
//             {
//               xtype: "textfield",
//               fieldLabel: "Card Number",
//               name: "ccNumber",

//               labelWidth: 110,
//               flex: 1,
//               allowBlank: false,
//               minLength: 15,
//               maxLength: 16,
//               enforceMaxLength: true,
//               maskRe: /\d/,
//             },
//             {
//               xtype: "fieldcontainer",
//               fieldLabel: "Expiration",

//               labelWidth: 75,
//               layout: "hbox",

//               items: [
//                 {
//                   xtype: "combobox",
//                   name: "ccExpireMonth",

//                   displayField: "name",
//                   valueField: "number",
//                   queryMode: "local",
//                   emptyText: "Month",
//                   hideLabel: true,
//                   margin: "0 6 0 0",
//                   width: 100,
//                   allowBlank: false,
//                   forceSelection: true,

//                   store: {
//                     type: "months",
//                   },
//                 },
//                 {
//                   xtype: "numberfield",
//                   name: "ccExpireYear",

//                   width: 90,
//                   hideLabel: true,
//                   value: new Date().getFullYear(),
//                   minValue: new Date().getFullYear(),
//                   allowBlank: false,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],

//   buttons: [
//     {
//       text: "Reset",
//       handler: "onResetClick",
//     },
//     {
//       text: "Complete Purchase",
//       width: 150,
//       handler: "onCompleteClick",
//     },
//   ],
// });
