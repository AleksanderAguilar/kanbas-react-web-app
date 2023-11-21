import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  
  const updateCourse = async (courseiD) => {
    const response = await axios.put(
      `${URL}/${courseiD}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === courseiD) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  const deleteCourse = async (courseID) => {
    const response = await axios.delete(
      `${URL}/${courseID}`
    );
    setCourses(courses.filter((c) => c._id !== courseID));

  };


  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
 
  
  return (
      <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />


        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;