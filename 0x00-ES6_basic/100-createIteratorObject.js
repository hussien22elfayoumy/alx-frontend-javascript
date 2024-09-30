export default function createIteratorObject(report) {
  const { allEmployees } = report;

  const array = Object.values(allEmployees);
  const employees = array.flat();

  return employees;
}
