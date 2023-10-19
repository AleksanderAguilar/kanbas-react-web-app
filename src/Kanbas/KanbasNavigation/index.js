
import Logo from '../images/logo.jpeg';
import { Link, useLocation } from "react-router-dom";
import './index.css';
import {BiUserCircle, BiTachometer, BiBookAlt, BiHelpCircle} from 'react-icons/bi'
import {BsFillCalendarWeekFill, BsFillInboxesFill} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {TbScreenShare} from 'react-icons/tb'
import {FaArrowAltCircleRight} from 'react-icons/fa'



function KanbasNavigation() {  
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const NavbarIcons = [ <BiUserCircle size={30} style={{ color: 'gray' }}/>,
                        <BiTachometer size={30}/>, 
                        <BiBookAlt size={30}/>, 
                        <BsFillCalendarWeekFill size={30}/>,  
                        <AiOutlineClockCircle size={30}/>, 
                        <BsFillInboxesFill size={30}/>, 
                        <TbScreenShare size={30}/>, 
                        <FaArrowAltCircleRight size={30}/>, 
                        <BiHelpCircle size={30}/>]
  const { pathname } = useLocation();



  return (
    // Navbar-container
    <div className="wd-kanbar-container">
      
      {/* image  */}
      <div className='wd-logo-container'>
         <img style={{ width: 150, height: 100 }} src={Logo}/>
      </div>
      <div className={"list-group wd-list-nav-bar " }style={{ width: 150 }}>
        {links.map((link, index) => (
         
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item wd-list-group-navbar ${pathname.includes(link) && "active"}`}
            > 

            <div style={{color: 'red'}}>{NavbarIcons[index]} </div>
                        
            {link}

          </Link>



        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;