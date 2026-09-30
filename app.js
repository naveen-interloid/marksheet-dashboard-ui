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
const SUBJECT_NAMES = { maths: "Maths", science: "Science", english: "English" };
const PASS_MARK = 35;


const tableTr = document.querySelector('.table-tr');
const tBody = document.querySelector('tbody');
const Tr = document.querySelector('tr');
const Td = document.querySelector('td');


students.forEach(student => {

  const card = document.createElement("div");
  card.classList.add("table-model");

  const addRow = (label, value) => {
    const row = document.createElement("div");
    row.classList.add("table-tr");

    const h3 = document.createElement("h3");
    h3.textContent = label;

    const p = document.createElement("p");
    p.textContent = value;

    row.append(h3, p);
    card.append(row);
  };

});


