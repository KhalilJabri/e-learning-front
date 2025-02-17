import React from 'react';
import './Topnav.css';
import spider from '../../assets/spider.jpg';
import { Link } from 'react-router-dom';


const TopNav = () => {

    return (
        <div className="topnav">
            <div className='topnav_container'>
                <h1></h1>
                <div className="profile">
                    <Link to="/dashboard/profile" className='profile_text'>
                        <span className='name' style={{}}>{localStorage.getItem("username")}</span>
                        <span className='role'>{localStorage.getItem("role").toLowerCase()}</span>
                    </Link>
                    <img className='img_profile' src={spider} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default TopNav;