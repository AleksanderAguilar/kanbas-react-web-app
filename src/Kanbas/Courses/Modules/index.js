import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.css';
import {BsThreeDotsVertical} from 'react-icons/bs'

import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div className='row'>
    
    {/* Buttons */}
    <div className='wd-buttons-row'>
    <Button variant="light" className='wd-modules-buttons'><BsThreeDotsVertical/></Button>{' '}  
    <Button variant="danger" className='wd-modules-buttons'>+ Module</Button>{' '}
    <Dropdown.Toggle className='wd-modules-buttons' variant="light" id="dropdown-basic">
        Publish All
      </Dropdown.Toggle>
      <Button variant="light" className='wd-modules-buttons'>View Progress</Button>{' '}  
      <Button variant="light" className='wd-modules-buttons '>Collapse All</Button>{' '}
    </div>
    
    <hr />
    <div className='wd-mod-list'>
      <ModuleList />
    </div>
    </div>
  );
}
export default Modules;