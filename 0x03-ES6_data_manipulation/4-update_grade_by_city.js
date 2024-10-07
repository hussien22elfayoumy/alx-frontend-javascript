export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student, i) => {
      // prettier-ignore
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: gradeObject ? gradeObject.grade : 'N/A' };
    });
}
