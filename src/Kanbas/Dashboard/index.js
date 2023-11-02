
import './index.css';
import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { Card } from 'react-bootstrap';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {

  return (
    <div className='wd-flex-row-container'>
      <h1>Dashboard</h1>
      <div className='wd-input-container'>
      <h5>Add / Edit Course </h5>
      <input value={course.name} className="form-control wd-input-margin"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />

      <input value={course.number} className="form-control wd-input-margin"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />

      <input 
      value={course.startDate} className="form-control wd-input-margin" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

      <input 
      
      value={course.endDate} className="form-control wd-input-margin" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />      
        
        
      <button 
      className="btn btn-success btn-sm wd-button-margin"
      onClick={addNewCourse} >
        Add
      </button>

      <button
      className="btn btn-light btn-sm wd-button-margin"
      onClick={updateCourse} >
        Update
      </button>
      </div>

      <hr className='bold' />

      <div className='wd-flex-row-container'>
        <h4>Published Courses (3)</h4>
        <hr className='bold' />

        <div className='container'>
          <div className='row'>
            {courses.map((course) => (

              <Card style={{ width: '17em' }} className="wd-course-card">
                <Card.Img variant="top" src="../images/blue.png" alt="..." className="card-img-top" />
                <Card.Body>

                  <Card.Title>
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-card-title">


                      {course.name}
                     

                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {course.number} <br />
                    {course.startDate} to  
                    {course.endDate}
                  </Card.Text>
                </Card.Body>
                <div className='wd-card-margin'>
                      <button
                        className="btn btn-light btn-sm wd-button-margin"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                        Edit
                      </button>

                      <button
                      className="btn btn-danger btn-sm wd-button-margin"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
                      </div>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
export default Dashboard;