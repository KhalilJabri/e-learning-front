import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import axios from "axios";
import host from "../../hosts/Host";

function EditProfile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");


    useEffect(() => {
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

                if (response.status === 200) {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);

                    console.log(response.data);
                } else {
                    setError(response.data);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Something went wrong. Please try again.");
            }
        };

        fetchUserProfile();
    }, []);

    // Handle form submission for updating user data
    const handleUpdate = async (e) => {
        e.preventDefault();
        const url = `/auth/updateUser/${localStorage.getItem("userId")}`;
        const fullUrl = `${host}${url}`;
        try {
            const response = await axios.patch(
                fullUrl,
                {
                    firstName,
                    lastName,
                    email,
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            console.log(response);
            if (response.status === 200) {
                setMessage("User updated successfully.");
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            } else {
                setError(response.data.message || "Failed to update user.");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            setError("Something went wrong. Please try again.");
        }
    };



    return (
        <div className="form-container">
            {/* Personal Information Section */}
            <div className="personal-info">
                <h2>Personal Information</h2>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleUpdate} >
                    <div className="test">
                    <FormInput label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <FormInput label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    </div>
                    {/* <FormInput label="Phone Number" placeholder="+990 3343 7865" /> */}
                    <FormInput label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* <FormTextArea label="BIO" placeholder="Lorem ipsum dolor sit amet..." /> */}
                    <div className="form-buttons">
                        {/* <button type="button" className="cancel">Cancel</button> */}
                        <button type="submit" className="save">Save</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

// Reusable Input Component
// Reusable Input Component
const FormInput = ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
    </div>
);

export default EditProfile;
