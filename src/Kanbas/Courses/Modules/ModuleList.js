import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (

    <ul className="list-group wd-module-list">
      <li className="list-group-item wd-module-list">
        <h3>Add / Update Course</h3>
        <div>

          <div className="row">
          <label for="coursename">Course Name</label>
          <input 
            className="wd-modules-margins form-control"
            id="coursename"
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />

          <label for="courseDescription">Course Description</label>
          <textarea
            id="courseDescription"
            className="wd-modules-margins form-control" 
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />

        </div>
          <div className="float-right">
          <button class="btn btn-success btn-sm wd-modules-buttons-change"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button class="btn btn-light btn-sm wd-modules-buttons-change"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          </div>
        </div>
      </li>
      {/* diff between setting up list and making list */}
      <br />
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div >
              <li key={index} className="list-group-item wd-module-list-item wd-module-row">


                <div className="wd-elipse">
                  <BsThreeDotsVertical />
                  <BsThreeDotsVertical />
                </div>

               
                <h4 className="wd-grow">{module.name}</h4>
                
               

                <Dropdown.Toggle className='wd-modules-buttons wd-right' variant="light" id="dropdown-basic">
                  <IoIosCheckmarkCircle style={{ color: "green" }} />
                </Dropdown.Toggle>
                <div className="wd-elipse">
                  <AiOutlinePlus />
                  <BsThreeDotsVertical />
                </div>

                <div>
                  <button class="btn btn-danger btn-sm wd-modules-buttons"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>

                  <button class="btn btn-light btn-sm wd-modules-buttons"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                </div>
              </li>
            </div>
          ))
      }
    </ul>
  );
}
export default ModuleList;