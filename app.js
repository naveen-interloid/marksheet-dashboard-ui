let students = [
  { roll: 1, name: "Aadhya R", maths: 92, science: 88, english: 95 },
  { roll: 2, name: "Bharath K", maths: 64, science: 71, english: 58 },
  { roll: 3, name: "Charulatha M", maths: 78, science: 84, english: 80 },
  { roll: 4, name: "Dinesh P", maths: 31, science: 45, english: 52 },
  { roll: 5, name: "Esha V", maths: 98, science: 94, english: 90 },
  { roll: 6, name: "Farhan A", maths: 55, science: 40, english: 66 },
  { roll: 7, name: "Gokul S", maths: 72, science: 28, english: 61 }
];

const SUBJECTS = ["maths", "science", "english"];
const SUBJECT_NAMES = {maths: "Maths",science: "Science",english: "English"};
const PASS_MARK = 35;


const tBody = document.querySelector("tbody");
const tableWrapper = document.querySelector(".table-wrapper");
const passPercentSpan = document.querySelector(".sec-head span");
const summaryCards = document.querySelectorAll(".summary .card");

function getGrade(average, isPass) {
  if (!isPass) return "F";

  else if (average >= 90) return "A+";
  else if (average >= 80) return "A";
  else if (average >= 70) return "B+";
  else if (average >= 60) return "B";
  else if (average >= 50) return "C";

  else return "D";
}

function updateSummary() {

  const totalStudents = students.length;
  let passedCount = 0;
  let failedCount = 0;
  let totalMarks = 0;

  students.forEach((student) => {

    const isPass = SUBJECTS.every((subject) => student[subject] >= PASS_MARK);
    if (isPass) {
      passedCount++;
    } else {
      failedCount++;
    }

    const studentTotal = SUBJECTS.reduce((sum, subject) => sum + student[subject], 0);
    totalMarks += studentTotal;
  });

}

