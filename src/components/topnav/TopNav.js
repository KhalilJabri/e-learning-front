import React from 'react';
import './Topnav.css';
import spider from '../../assets/spider.jpg';


const TopNav = () => {

    return (
        <div className="topnav">
            <div className='topnav_container'>
                <h1></h1>
                <div className="profile">
                    <div className='profile_text'>
                        <span className='name'>Spider</span>
                        <span className='role'>Admin</span>
                    </div>
                    <img className='img_profile' src={spider} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default TopNav;