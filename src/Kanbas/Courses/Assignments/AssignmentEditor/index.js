import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import './index.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    // const assignment = db.assignments.find(
    //     (assignment) => assignment._id === assignmentId);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        if (assignment.title === "New assignment 123") {
            dispatch(addAssignment(assignment))

          }
          dispatch(updateAssignment(assignment))
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="row wd-grow" style={{ width: '97%' }}>
            <div className=" wd-flex-grow-1">
                <div style={{ float: 'right' }}>
                    <IoIosCheckmarkCircle style={{ color: "green" }} size={25} />
                    <span style={{ color: "green" }}>Published</span>
                    <button className="btn btn-light me-2 wd-button-margin">
                        <BsThreeDotsVertical />
                    </button>
                </div>
            </div>
            <div>
                <hr />
                <h4>Assignment Name</h4>
                 
            </div>

            <input value={assignment.title}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                className="form-control wd-form-margin" />

            <label for="assignmentdescription">Assignment Description</label>
            <input
                id="assignmentdescription"
                value={assignment.descrption}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, descrption: e.target.value }))}
                className="form-control wd-form-margin" />

            <label for="availablefrom">Available From</label>
            <input
            id="availablefrom"
                value={assignment.availableFromDate} 
                className="form-control wd-form-margin" type="date"
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                />

            <label for="duedate">Due on</label>
            <input
                id="duedate"
                value={assignment.dueDate} 
                className="form-control wd-form-margin" type="date"
                onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                />

            <label for="availableUntilDate">Available until</label>
            <input
                id="availableUntilDate"
                value={assignment.availableUntilDate} 
                className="form-control wd-form-margin" type="date"
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                />

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