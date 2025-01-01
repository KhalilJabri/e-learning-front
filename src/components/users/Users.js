import React, { useState } from 'react';
import './Users.css';
import { UsersData as users } from '../data/data';

function Users() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState(users);

    
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'all') {
            setUserList(userList.filter(user => user.name.toUpperCase().includes(search.toUpperCase())));
        }
        else if (event.target.value === 'student') {
            setUserList(userList.filter(user => user.role.toUpperCase() === 'student'.toUpperCase() && 
                                                user.name.toUpperCase().includes(search.toUpperCase())));
        }
        else if (event.target.value === 'teacher') {
            setUserList(userList.filter(user => user.role.toUpperCase() === 'teacher'.toUpperCase()&& 
                                                user.name.toUpperCase().includes(search.toUpperCase())));
        }
    };

    const searchHandler = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            setUserList(userList.filter(user => user.username.toUpperCase().includes(search.toUpperCase())));
        }
    }


    return (
        <div className="dashboard-container">
            <div className='headerTitle'>
                <p>Users</p>
                <p>Dashboard/ Users</p>
            </div>
            <div className='body'>
                <div className='filter'>
                    <div className='dropdown-container'>
                        <select id="dropdown" value={selectedOption} onChange={handleChange}>
                            <option value="all">All</option>
                            <option value="student">Etudiant</option>
                            <option value="teacher">Enseignant</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <input
                            placeholder='Search'
                            className='search'
                            onChange={searchHandler}
                        />
                    </div>
                    <div className=''>
                        <button className="button_add_user">Add User</button>
                    </div>
                </div>

                <div className='table-container'>
                    <div className='titles-container'>
                        <p className='column column-first'>Username</p>
                        <p className='column'>Email</p>
                        <p className='column'>age</p>
                        <p className='column'>FS</p>
                    </div>
                    <div className='ron-container'>
                        {userList.map((user) => (
                            <div className='rows' key={user.id}>
                                <div className='column username_container'>
                                    <img className='user_picture' src={user.picture} alt={`${user.username}'s profile`} />
                                    <p className='username'>{user.username}</p>
                                </div>
                                <p className='column'>{user.email}</p>
                                <p className='column user_age'>{user.age}</p>
                                <p className='column'>{user.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users