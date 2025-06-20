/**
 *  PROBLEM
 *
 *  Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents and studentName), iterate ove all students and fint that specific user "studentName".
 */

const allStudents = ["Sally", "John", "Mark", "Doe", "Jane"];

const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName} at index ${i}`);
    }
  }
};

findStudent(allStudents, "Doe");
