interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'hussien',
  lastName: 'mohammed',
  age: 24,
  location: 'egypt',
};

const student2: Student = {
  firstName: 'ahmed',
  lastName: 'mohammed',
  age: 20,
  location: 'egypt',
};

const studentList: Student[] = [student1, student2];

const table = `
	<table>
		${studentList.forEach((student) => {
      `
			<tr>
			${student.firstName} ${student.location}
			</tr>
			`;
    })}
	</table>

`;
