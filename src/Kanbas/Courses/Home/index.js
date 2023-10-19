import ModuleList from "../Modules/ModuleList";
import './index.css'
import Button from 'react-bootstrap/Button';
import {AiOutlineFileAdd, AiOutlineBell} from 'react-icons/ai'
import {FaFileImport} from 'react-icons/fa'
import {IoIosStats} from 'react-icons/io'
import {HiSpeakerphone} from 'react-icons/hi'
import {BiTargetLock} from 'react-icons/bi'
import {PiNumberCircleFiveFill, PiNumberCircleOneFill} from 'react-icons/pi'


function Home() {
    return (
        <div className="d-flex ">
            <div className="wd-mod-list-d ">
                <ModuleList />
            </div>

            <div className="wd-cols">
                <div className="d-grid gap-2 " >
                    <Button variant="light" ><AiOutlineFileAdd/>Import Existing Content</Button>
                    <Button variant="light"><FaFileImport/> Import from Commons</Button>
                    <Button variant="light"><BiTargetLock/>Choose Homepage</Button>
                    <Button variant="light"><IoIosStats/>View Course Stream</Button>
                    <Button variant="light"><HiSpeakerphone/>View Anouncements</Button>
                    <Button variant="light"><IoIosStats/>New Analytics</Button>
                    <Button variant="light"><AiOutlineBell/>View Course Notifications</Button>
                </div><br />

                <h4>To Do</h4>
                <hr />
                <div className="d-flex">
                <PiNumberCircleOneFill style={{color: "red"}}/> 
                <div>    
                <p style={{color: "red"}}> Grade A1 - ENV + HTML</p>
                <p> CS 4450 1234.3456</p>
                </div>
                </div>
                <div className="d-flex">
                <PiNumberCircleFiveFill style={{color: "red"}}/> 
                <div>    
                <p style={{color: "red"}}> Grade A2 - CSS + BOOTSTRAP</p>
                <p> CS 4450 1234.3456</p>
                </div>
                </div>


            </div>

        </div>




    );
}
export default Home;