import React, { useState } from 'react';
import './Demand.css';
import { TestData } from '../data/data';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Demand() {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState(TestData);

  

  return (
    <div className="dashboard-container">
      <div className='headerTitle'>
        <p>Users</p>
        <p>Dashboard/ Users</p>
      </div>
      <div className='body'>
        <div className='filter'>
          {/* <div className='dropdown-container'>
            <select id="dropdown"
              value={selectedOption}
            // onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="student">Etudiant</option>
              <option value="teacher">Enseignant</option>
            </select>
          </div> */}
          <div className='input-container'>
            <input
              placeholder='Search'
              className='search'
            // onChange={searchHandler}
            />
          </div>
          {/* <div className=''>
            <button className="button_add_user">Add User</button>
          </div> */}
        </div>

        <div className='table-container'>
          <div className='titles-container'>
            <p className='column column-first'>Username</p>
            <p className='column'>Certif-Name</p>
            <p className='column'>type</p>
            <p className='column'>status</p>
            <p className='column'>Action</p>
          </div>
          <div className='ron-container'>
            {userList.map((user) => (
              <div className="rows" key={user.id}>
                <div className="column username_container">
                  <img
                    className="user_picture"
                    src={user.picture}
                    alt={`${user.username}'s profile`}
                  />
                  <p className="username">{user.username}</p>
                </div>
                <p className="column">{user.coursName}</p>
                <p className="column user_age">{user.type}</p>
                <p className="column">{user.dateExamen}</p>
                <div className="column button_group">
                  <button className="btn circular-btn accept-btn">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn circular-btn refuse-btn">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Demand;