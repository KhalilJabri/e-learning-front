import React from 'react';
import './Dashboard.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar'
import TopNav from '../../components/topnav/TopNav';
import Rapport from '../../components/rapport/Rapport';
import Profile from '../../components/profile/Profile';
import Course from '../../components/course/Course';
import Users from '../../components/users/Users';
import Calendar from '../../components/calendar/Calendar';
import EditProfile from '../../components/editprofile/EditProfile';

function Dashboard() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <div className="main-content">
        {/* Top Navigation is persistent */}
        <TopNav />

        {/* Routing for different dashboard pages */}
        <Routes>
          <Route path="course" element={<Course />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rapport" element={<Rapport />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path='editprofile' element={<EditProfile />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
