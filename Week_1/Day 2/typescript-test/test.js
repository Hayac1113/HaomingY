"use strict";
// interface Student {
//     name: string;
//     class: number;
//     subject: string;
// };
// const student_1: Student = {
//     name: "Albert Einstein",
//     class: 100,
//     subject: "Physics"
//   };
//   const student_2: Student = {
//     name: "Richard Feynman",
//     class: 100,
//     subject: "Physics"
//   };
//   const student_3: Student = {
//     name: "Charles Darwin",
//     class: 100,
//     subject: "Biology"
//   };
//   const classRoom: Student[] = [student_1, student_2, student_3]
//   interface Builder {
//     name: string;
//     machines: Machines[];
// };
// interface Machines {
//     name: string;
//     type: string;
// };
//   const nested: Builder = {
//     name: "Bob the Builder",
//     machines: [{
//       name: "Lofty",
//       type: "Crane"
//     },
//     {
//       name: "Scoop",
//       type: "Loader"
//     },
//     {
//       name: "Muck",
//       type: "Bulldozer"
//     }]
//   };
function canUserOrderAlcohol(barOpen, age) {
    if (barOpen) {
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
