import React from 'react';
import './Sidebar.css';
import dasboard from '../../assets/icons/dashboard.png'
import calender from '../../assets/icons/calender.png'
import teacher from '../../assets/icons/teacher.png'
// import graduated from '../../assets/icons/graduated.png'
import onlinelearning from '../../assets/icons/online-learning.png'
import list from '../../assets/icons/list.png'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CRTek-Up</h2>
      <div className='elements'>
        <h3>Menu</h3>
        <ul>
          <li>
            {localStorage.getItem("role").toUpperCase() === 'ADMIN' ? (
              <Link to="/dashboard/rapport" >
                <img className='icons' src={dasboard} alt='dashboard' />
                <p>Rapports</p>
              </Link>
            ) : (<></>)}
          </li>
          <li>
            <Link to="/dashboard/course">
              <img className='icons' src={onlinelearning} alt='onlinelearning' />
              <p>online-course</p>
            </Link>
          </li>
          <li>
            {localStorage.getItem("role").toUpperCase() === 'ADMIN' ? (
              <Link to="/dashboard/calendar">
                <img className='icons' src={calender} alt='calender' />
                <p>Calendar</p>
              </Link>
            ) : (<></>)}
          </li>
          <li>
            {localStorage.getItem("role").toUpperCase() === 'ADMIN' ? (
              <Link to="/dashboard/users">
                <img className='icons' src={teacher} alt='teacher' />
                <p>Users</p>
              </Link>
            ) : (<></>)}
          </li>
          <li>
            {localStorage.getItem("role").toUpperCase() === 'ADMIN' ? (
              <Link to="/dashboard/demand" >
                <img className='icons' src={list} alt='dashboard' />
                <p>demandes</p>
              </Link>
            ) : (<></>)}

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;