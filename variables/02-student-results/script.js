let studentName = "Wandile";

let subject1Marks = 86;
let subject2Marks = 76;
let subject3Marks = 92;

const studentNameEl = document.querySelector("#student-name");
studentNameEl.textContent = studentName;

const subject1MarksEl = document.querySelector("#subject-1-marks");
subject1MarksEl.textContent = subject1Marks;

const subject2MarksEl = document.querySelector("#subject-2-marks");
subject2MarksEl.textContent = subject2Marks;

const subject3MarksEl = document.querySelector("#subject-3-marks");
subject3MarksEl.textContent = subject3Marks;

const totalMarks = subject1Marks + subject2Marks + subject3Marks;

const averageMark = Math.round(totalMarks / 3);



