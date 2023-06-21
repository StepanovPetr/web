import {useState} from 'react'
import './StudentCreate.css'

const StudentCreate = ({ createStudent }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasName] = useState('');
    
    // Изменение имени.
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    // Изменение фамилии.
    const changeLasName = (e) => {
        setLasName(e.target.value)
    }

    return (
        <div className="row">
            <div className="col-sm-3 StudentCreate">
                <input className="form-control" type="text" name="firstName" value={firstName} onChange={changeFirstName} ></input>
                <input className="form-control" type="text" name="lastName"  value={lastName} onChange={changeLasName}></input>
                {/* Поднятие функции в верх */}
                <button onClick={() => createStudent(firstName, lastName)} className="btn btn-success">New Student</button>
            </div>
        </div>
    )
}

export default StudentCreate;