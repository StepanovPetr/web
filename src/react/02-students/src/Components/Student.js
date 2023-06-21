// npm install react-bootstrap bootstrap
import { Button } from "bootstrap";

const Student = ({ firstName, lastName, deleteStudent }) => {
  return (
  <tr>
    <th scope="row">{firstName}</th>
    <td>{lastName}</td>
    <td> <button  className="btn" type="Button" onClick={deleteStudent}> Delete </button> </td>
  </tr>)
}

export default Student;