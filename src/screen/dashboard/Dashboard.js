import React from 'react';
import './Dashboard.css';
import Sidebar from '../../components/sidebar/Sidebar'
import TopNav from '../../components/topnav/TopNav';
import Rapport from '../../components/rapport/Rapport';
import Profile from '../../components/profile/Profile';

function Dashboard() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <Profile />
        {/* <Rapport /> */}
      </div>
    </div>
  );
}

export default Dashboard;
