import db from "../../Database";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiFillFilter } from 'react-icons/ai'
import { FaFileImport } from 'react-icons/fa'
import { BiSolidCog } from 'react-icons/bi'

import "./index.css"

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="row">

                <div className=" wd-grow">
                    <div className="wd-flex-grow-1">
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                        <span style={{ color: "red" }}>Gradebook</span>
                        </Dropdown.Toggle>
                        <div style={{float: 'right'}}>
                        
                            <Button variant="light" className="wd-bb "> <FaFileImport/>Import</Button>{' '}
                            <Button variant="light" className="wd-bb "> <FaFileImport/>Export</Button>{' '}
                            <Button variant="light" className="wd-bb "> <BiSolidCog/></Button>{' '}
                        </div>
                    </div> 
                </div>


                <div className=" wd-grow">
                    <div>
                        <Form.Group className="mb-3 wd-form-with" controlId="exampleForm.ControlInput1">
                            <Form.Label>Student Names</Form.Label>
                            <Form.Control type="email" placeholder="Search Student" />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3 wd-form-with" controlId="exampleForm.ControlInput1">
                            <Form.Label>Assignmnent Names</Form.Label>
                            <Form.Control type="email" placeholder="Search Assignmments " />
                        </Form.Group>
                    </div>
                </div>
            </div>

            <Button variant="light">
                <AiFillFilter />
                Apply filter
            </Button>{' '}


            <div className="table-responsive wd-table">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
}
export default Grades;