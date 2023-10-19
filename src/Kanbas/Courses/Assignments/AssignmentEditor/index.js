import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import './index.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="row wd-grow" style={{width: '97%'}}>
        <div className=" wd-flex-grow-1">
            <div style={{ float: 'right' }}>
                <IoIosCheckmarkCircle style={{ color: "green" }} size={25} />
                <span style={{ color: "green" }}>Published</span>
                <button className="btn btn-light me-2 wd-button-margin">
                    <BsThreeDotsVertical/>
                </button>
            </div>
            </div>
            <div>
                <hr />
                <h4>Assignment Name</h4>
            </div>
            <input value={assignment.title}
                className="form-control mb-2" />

            <hr />
            <div className=" wd-flex-grow-1">
            <div style={{ float: 'right' }}>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-Danger me-2 wd-button-margin">
                    Save
                </button>
            </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;