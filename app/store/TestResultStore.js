Ext.define("MsTraining.store.TestResultStore", {
  extend: "Ext.data.Store",
  alias: "store.testResultStore",
  model: "MsTraining.model.TestResult",
  data: [
    {
      student: "Student 1",
      mark: 84,
    },
    {
      student: "Student 2",
      mark: 72,
    },
    {
      student: "Student 3",
      mark: 96,
    },
    {
      student: "Student 4",
      mark: 68,
    },
  ],
  //   filters: [
  //     // Filter to include only student 2, student 3, and student 4
  //     {
  //       property: "student",
  //       value: ["Student 2", "Student 3", "Student 4"],
  //     },
  //   ],
});
