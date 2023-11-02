import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "./assignmentsReducer";


import './index.css'


function Assignments() {
    const { courseId } = useParams();
    // const assignments = db.assignments;
    // const courseAssignments = assignments.filter(
    //     (assignment) => assignment.course === courseId);
    const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();


    return (

        <div className="row">

            <div className='d-flex'>
                <div className="wd-form">
                    <Form.Control type="email" placeholder="Search for Assignment" />
                </div>

                <div className="wd-buttons-row">
                    <Button variant="light" className='wd-modules-buttons '><BsThreeDotsVertical /></Button>{' '}

                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/newAssignment`}
                        className="btn btn-danger wd-modules-buttons"
                    >

                        + Assignment
                    </Link>

                    <Button variant="light" className='wd-modules-buttons'>+ Group</Button>{' '}

                </div>
            </div>
            <hr />
            <div className="list-group wd-assignment-list">

                <li class="list-group-item wd-first-item">
                    <div>
                        <PiDotsSixVerticalBold size={25} />
                        Assignments
                        <div style={{ float: 'right' }}>
                            40% of Total
                            <AiOutlinePlus size={25} />
                            <BsThreeDotsVertical size={25} />
                        </div>
                    </div>
                </li>

                {courseAssignments.map((assignment) => (

                    <Link
                        key={assignment._id}
                        onClick={() => dispatch(selectAssignment(assignment))}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item wd-module-row">



                        <div className="wd-list-icons">
                            <PiDotsSixVerticalBold size={25} />
                            <CgNotes size={25} style={{ color: "green" }} />
                        </div>
                        <div className="wd-grow">
                            <div>
                                <h6 >{assignment.title}</h6>

                                <p> <span style={{ color: "red" }}>Multiple Modules</span>  |  Due on septemver 18 at 11:59pm | 100 pts</p>
                            </div>
                        </div>

                        <div style={{ float: 'right' }} className="wd-list-icons">
                            <IoIosCheckmarkCircle style={{ color: "green" }} size={25} />
                            <BsThreeDotsVertical size={25} />
                                <Button variant="danger" className='wd-modules-buttons'
                                    onClick={() => dispatch(deleteAssignment(assignment))}
                                >Delete</Button>
                        </div>
                    </Link>

                ))}
            </div>

        </div>
    );
}
export default Assignments;