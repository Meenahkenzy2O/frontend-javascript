
// Define Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allows extra properties
}

// Extend Teacher with Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

