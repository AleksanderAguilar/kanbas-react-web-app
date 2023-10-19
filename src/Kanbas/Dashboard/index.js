
import './index.css';
import { Link } from "react-router-dom";
import db from "../Database";
import {Card} from 'react-bootstrap';


// //create a card
// const MakeCard = (card, indx)
//




function Dashboard() {
  const courses = db.courses;
  return (
    <div className='wd-flex-row-container'>
      <h1>Dashboard</h1>
      <hr className='bold' />

      <div className='wd-flex-row-container'>
        <h4>Published Courses (3)</h4>
        <hr className='bold' />

        <div className='container'>
          <div className='row'>
          {courses.map((course) => (

            <Card style={{ width: '17em' }} className="wd-course-card">
              <Card.Img variant="top"  src="../images/blue.png"  alt="..." className="card-img-top" />
            <Card.Body>
            
              <Card.Title>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-card-title">
                {course.name}
                </Link>
            </Card.Title>
              <Card.Text>
              {course.number} <br />
              {course.startDate}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
          </div>
        </div>
        

      </div>
    </div>
  );
}
export default Dashboard;