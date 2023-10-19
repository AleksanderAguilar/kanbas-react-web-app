import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-module-list borderless">
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
            </li>
            </div>
          ))
      }
    </ul>
  );
}
export default ModuleList;