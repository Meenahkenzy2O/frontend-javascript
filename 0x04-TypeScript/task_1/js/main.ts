
interface Teacher {
  readonly firstName: string;      // only modifiable at initialization
  readonly lastName: string;       // only modifiable at initialization
  fullTimeEmployee: boolean;       // always defined
  yearsOfExperience?: number;      // optional
  location: string;                // always defined
  [key: string]: any;              // allows additional properties
}
interface Directors extends Teacher {
  numberOfReports: number;         // required for Directors
}
