const bobGrades = [3.7, 4.0, 3.3, 1.3, 3.0, 2.0]
const maryGrades = [4.0, 2.3, 3.3, 3.0, 3.7, 4.0]
const juanGrades = [1.3, 4.0, 3.0, 2.0, 3.7, 2.7]

function semesterGPA() {
  function calcGPA(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    return Number(average.toFixed(3));
  }

  // Calculate each student's GPA
  const bobGPA = calcGPA(bobGrades);
  const maryGPA = calcGPA(maryGrades);
  const juanGPA = calcGPA(juanGrades);

  // Return a string with each student's GPA on a new line
  return `Bob: ${bobGPA}\nMary: ${maryGPA}\nJuan: ${juanGPA}`;
}

/** EXPORT - DO NOT MODIFY **/
export const answer = semesterGPA()
