export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student, i) => {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return { ...student, grade: gradeObject ? gradeObject.grade : 'N/A' };
    });
}

/* 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]

[{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }])
*/
