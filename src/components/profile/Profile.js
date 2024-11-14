import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    <div className="profile-card">
      <div className="header-background">
        <button className="edit-btn">
          <i className="fas fa-camera"></i> Edit
        </button>
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
        <h2>Danish Helium</h2>
        <p>UI/UX Designer</p>
        {/* <div className="stats">
          <div>
            <strong>259</strong>
            <span>Posts</span>
          </div>
          <div>
            <strong>129K</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>2K</strong>
            <span>Following</span>
          </div>
        </div> */}
        <div className="about">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            posuere fermentum urna, eu condimentum mauris tempus ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile