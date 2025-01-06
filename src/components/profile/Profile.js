import React, { useState, useEffect } from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../../hosts/Host';

function Profile() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");


  const fetchUserProfile = async () => {
    const url = `/auth/viewProfil/${localStorage.getItem("userId")}`;
    const fullUrl = `${host}${url}`;
    try {
      const response = await axios.get(fullUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });

      console.log("kkkkkk " + response.data);

      if (response.status === 200) {
        setUser(response.data);

      } else {
        setError(response.data);
      }
    } catch (error) {
      // console.error("Error fetching users:");
      setError("Something went wrong. Please try again.");
    }
  };
  useEffect(() => {

    fetchUserProfile();
  }, []);

  return (
    <div className='card_container'>
      <diV className="title_container">
        <p className='title'>Profile</p>
      </diV>
      <div className='profile_container'>
        <div className="profile-card">
          <div className="header-background">
            <Link to="/dashboard/editprofile" >

              <button className="edit-btn">
                <i className="fas fa-camera"></i> Edit
              </button>
            </Link>
            {/* <img className='header-background-img' src="https://timelinecovers.pro/facebook-cover/download/cool-facebook-cover.jpg" /> */}
          </div>
          <div className="profile-pic">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/cool-facebook-cover.jpg" // Replace with actual image URL
              alt="Profile"
            />
            <div className="profile-pic-overlay">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <div className="profile-info">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.role}</p>
            <div className="about">
              <h3>About Me</h3>
              <p>{user.email} : {user.isActive ? "active" : "inactive"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile