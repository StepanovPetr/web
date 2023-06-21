import Student from './Student';
import StudentCount from './StudentCount';
import StudentCreate from './StudentCreate';
import { useState } from "react"

const StudentList = () => {
  const [studentList, setStudentList] = useState([
    { firstName: "Вася", lastName: "Иванов", id: 1 },
    { firstName: "Коля", lastName: "Степанов", id: 2 }
  ])

  const [studentCount, setStudentCount] = useState(studentList.length)

  // Создаение набора react компонентов.
  const getStudents = () => {
    return studentList.map((student) =>
      <Student key={student.id}
        firstName={student.firstName}
        lastName={student.lastName}
        // Проброс события.
        deleteStudent={() => deleteStudent(student.id)} > </Student>);
  }

  // Удаление.
  const deleteStudent = (i) => {
    const newStudentList = studentList.filter(student => student.id !== i);

    setStudentList(newStudentList);
    setStudentCount(newStudentList.length);
  }

  // Создание.
  const createStudent = (firstName, lastName) => {
    const newStudentList = [...studentList, { firstName: firstName, lastName: lastName, id: studentList.length + 1 }];

    setStudentList(newStudentList);
    setStudentCount(newStudentList.length);
  }

  return (
    <div>
      <StudentCount studentCount={studentCount}> </StudentCount>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">firstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getStudents()}
        </tbody>
      </table>
      <StudentCreate createStudent={(firstName, lastName) => createStudent(firstName, lastName)} ></StudentCreate>
    </div>
  )
}

export default StudentList;