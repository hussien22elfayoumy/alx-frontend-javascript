export default function getListStudentIds(students) {
  if (typeof students === 'object') {
    const ids = students.map((student) => student.id);
    return ids;
  } else return [];
}
