/**
 * This class defines the data store for the menu tree used in the application. It extends Ext.data.TreeStore
 * to handle hierarchical data structures. The alias "store.menu" allows easy reference to this store throughout
 * the application.
 */
Ext.define("MsTraining.store.Menu", {
  extend: "Ext.data.TreeStore", // Extending TreeStore to handle hierarchical data
  alias: "store.menu", // Alias for easy reference to this store

  root: {
    text: "Root", // Root node of the menu tree
    expanded: true, // Root node is expanded by default
    children: [
      {
        text: "Security", // Node for security-related items
        iconCls: "fas fa-users-cog", // Icon class for security node
        children: [
          {
            text: "Users", // Child node for user management
            iconCls: "fa fa-users", // Icon class for users node
            className: "users", // CSS class for user grid component
            leaf: true, // Indicates this node is a leaf node (i.e., it has no children)
          },
          // {
          //   text: "Todos", // Child node for todo items
          //   iconCls: "fas fa-user-secret", // Icon class for todos node
          //   className: "todogrid", // CSS class for todo grid component
          //   leaf: true, // Indicates this node is a leaf node
          // },
          {
            text: "Check Out Form", // Child node for todo items
            iconCls: "fas fa-user-secret", // Icon class for todos node
            className: "checkoutform", // CSS class for todo grid component
            leaf: true, // Indicates this node is a leaf node
          },
        ],
      },
      {
        text: "Accounting Data", // Node for static data items
        iconCls: "fa fa-database fa-lg", // Icon class for static data node
        children: [
          {
            text: "Trial Balance", // Child node for posts
            iconCls: "fa fa-dollar-sign", // Icon class for posts node
            className: "trialbalancegrid", // CSS class for post grid component
            leaf: true, // Indicates this node is a leaf node
          },
        ],
      },

      {
        text: "Department Data", // Node for static data items
        iconCls: "fa fa-database fa-lg", // Icon class for static data node
        children: [
          {
            text: "Posts", // Child node for posts
            iconCls: "fa fa-users", // Icon class for posts node
            className: "postgrid", // CSS class for post grid component
            leaf: true, // Indicates this node is a leaf node
          },
          {
            text: "Employee", // Child node for personnel data
            iconCls: "fa fa-users", // Icon class for personnel node
            leaf: true, // Indicates this node is a leaf node
            className: "employeeGrid", // CSS class for main list component
          },
          {
            text: "Students", // Child node for personnel data
            iconCls: "fa fa-users", // Icon class for personnel node
            leaf: true, // Indicates this node is a leaf node
            className: "summaryTestGrid", // CSS class for main list component
          },
        ],
      },
      {
        text: "Reviews", // Node for static data items
        iconCls: "fa fa-database fa-lg", // Icon class for static data node
        children: [
          {
            text: "review Panel", // Child node for posts
            iconCls: "fa fa-users", // Icon class for posts node
            className: "reviewpanel", // CSS class for post grid component
            leaf: true, // Indicates this node is a leaf node
          },
        ],
      },
    ],
  },
});
