interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Aminat",
  lastName: "Jumoke",
  age: 24,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Halima",
  lastName: "Bello",
  age: 22,
  location: "Abuja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
