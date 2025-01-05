import React, { useState, useEffect } from 'react';
import './Users.css';
// import { UsersData as users } from '../data/data';
import axios from "axios";
import host from '../../hosts/Host';

function Users() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState("");

    // const instance = axios.create({
    //     baseURL: "https://0337-197-244-19-79.ngrok-free.app",
    //     withCredentials: true, // for cookies or sessions
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });


    useEffect(() => {
        const fetchUsers = async (url = "/auth/viewUsers") => {
            const fullUrl = `${host}${url}`;
            try {
                const response = await axios.get(fullUrl, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                          Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });

                // Example usage
                // const xx= instance.get("/auth/viewUsers").then(response => console.log(response));
                // console.log("+++++++++++++++" +xx);
                if (response.status === 200) {
                    setUserList(response.data); // Assuming the response contains a `users` field

                } else {
                    setError(response.data);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Something went wrong. Please try again.");
            }
        };

        fetchUsers();
    }, []);

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
            setUserList(userList.filter(user => user.role.toUpperCase() === 'teacher'.toUpperCase() &&
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
            {error && <p style={{ color: "red" }}>{error}</p>}

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
                        <button className="button_add_user" style={{ color: 'white' }}>Add User</button>
                    </div>
                </div>

                <div className='table-container'>
                    <div className='titles-container'>
                        <p className='column column-first'>Username</p>
                        <p className='column'>Email</p>
                        <p className='column'>Role</p>
                        <p className='column'>Active</p>
                    </div>
                    <div className='ron-container'>
                        {userList.map((user) => (
                            <div className='rows' key={user.id}>
                                <div className='column username_container'>
                                    {/* <img className='user_picture' src={user.picture} alt={`${user.username}'s profile`} /> */}
                                    <p className='username'>{user.firstName} {user.lastName}</p>
                                </div>
                                <p className='column'>{user.email}</p>
                                <p className='column user_age'>{user.role}</p>
                                {user.active === true ? <p className='column'>Active</p> : <p className='column'>Inactive</p>}
                                {/* <p className='column'>{user.active}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users