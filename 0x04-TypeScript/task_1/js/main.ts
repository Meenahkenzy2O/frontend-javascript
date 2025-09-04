
// Define Teacher interface
interface Teacher {
  readonly firstName: string;   // only set when initialized
  readonly lastName: string;    // only set when initialized
  fullTimeEmployee: boolean;    // must always be defined
  yearsOfExperience?: number;   // optional
  location: string;             // must always be defined
  [key: string]: any;           // allow extra properties like "contract"
}

// Define Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log('Teacher:', teacher3);

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

// Interface for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example
console.log(printTeacher("John", "Doe")); // J. Doe

