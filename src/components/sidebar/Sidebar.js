import React from 'react';
import './Sidebar.css';
import dasboard from '../../assets/icons/dashboard.png'
import calender from '../../assets/icons/calender.png'
import teacher from '../../assets/icons/teacher.png'
import graduated from '../../assets/icons/graduated.png'
import onlinelearning from '../../assets/icons/online-learning.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
          <h2>CRTek-up</h2>
          <div className='elements'>
            <h3>Menu</h3>
            <ul>
              <li>
                <img className='icons' src={dasboard} alt='dashboard' />
                <p>Rapports</p>
              </li>
              <li>
                <img className='icons' src={onlinelearning} alt='onlinelearning' />
                <p>online-course</p>
              </li>
              <li>
                <img className='icons' src={calender} alt='calender' />
                <p>Calender</p>
              </li>
              <li>
                <img className='icons' src={teacher} alt='teacher' />
                <p>Enseignant</p>
              </li>
              <li>
                <img className='icons' src={graduated} alt='graduated' />
                <p>Etudiant</p>
              </li>
            </ul>
          </div>
        </div>
      );
    }

export default Sidebar;