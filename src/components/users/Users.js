import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Users.css';
import host from '../../hosts/Host';

function Users() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState([]);
    const [filteredUserList, setFilteredUserList] = useState([]);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false); // For modal visibility
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isActive: true,
        role: 'ROLE_ETUDIANT',
    });

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

                if (response.status === 200) {
                    setUserList(response.data);
                    setFilteredUserList(response.data); // Initially set filtered list as full list
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError("Something went wrong. Please try again.");
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        // Filter users by first name or last name
        const filteredUsers = userList.filter(user =>
            user.firstName.toLowerCase().includes(value.toLowerCase()) || 
            user.lastName.toLowerCase().includes(value.toLowerCase())
        );

        // Apply role filter
        filterByRole(filteredUsers);
    };

    const handleFilter = (e) => {
        const value = e.target.value;
        setSelectedOption(value);

        // Filter by role and apply search filter
        const filteredUsers = userList.filter(user => 
            (value === 'all' || user.role === value)
        );

        // Apply search filter
        filterBySearch(filteredUsers);
    };

    const filterBySearch = (filteredUsers) => {
        // Apply search on the filtered users list
        const finalFilteredList = filteredUsers.filter(user =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) || 
            user.lastName.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUserList(finalFilteredList);
    };

    const filterByRole = (filteredUsers) => {
        // Apply role filter to the filtered users list
        const finalFilteredList = filteredUsers.filter(user => 
            (selectedOption === 'all' || user.role === selectedOption)
        );
        setFilteredUserList(finalFilteredList);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${host}/auth/register`;
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (response.status === 200) {
                setUserList([...userList, response.data]);
                setShowModal(false);
                setFormData({ firstName: '', lastName: '', email: '', password: '', role: 'ROLE_ETUDIANT' });
                setShowModal(false);
                console.log("User added successfully");
            }
        } catch (error) {
            setError("Failed to add user. Please try again.");
        }
    };

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
                        <select id="dropdown" value={selectedOption} onChange={handleFilter}>
                            <option value="all">All</option>
                            <option value="ROLE_ETUDIANT">Etudiant</option>
                            <option value="ROLE_ENSEIGNANT">Enseignant</option>
                            <option value="ROLE_ADMIN">Admin</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <input
                            placeholder='Search'
                            className='search'
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                    <div>
                        <button className="button_add_user" onClick={() => setShowModal(true)}>
                            Add User
                        </button>
                    </div>
                </div>

                <div className='table-container'>
                    <div className='titles-container'>
                        <p className='column column-first'>Username</p>
                        <p className='column'>Email</p>
                        <p className='column'>Role</p>
                        <p className='column'>Active</p>
                    </div>
                    <div className='rows-container'>
                        {filteredUserList.map((user) => (
                            <div className='rows' key={user.id}>
                                <div className='column username_container'>
                                    <p className='username'>{user.firstName} {user.lastName}</p>
                                </div>
                                <p className='column'>{user.email}</p>
                                <p className='column user_role'>{user.role}</p>
                                {user.isActive ? <p className='column'>Active</p> : <p className='column'>Inactive</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Add New User</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select name="role" value={formData.role} onChange={handleFormChange}>
                                    <option value="ROLE_ETUDIANT">Etudiant</option>
                                    <option value="ROLE_ENSEIGNANT">Enseignant</option>
                                    <option value="ROLE_ADMIN">Admin</option>
                                </select>
                            </div>
                            <div className="modal-buttons">
                                <button type="submit" className="btn-submit">Add User</button>
                                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;
