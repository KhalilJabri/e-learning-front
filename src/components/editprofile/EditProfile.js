import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import spider from '../../assets/spider.jpg';
import axios from "axios";
import host from "../../hosts/Host";

function EditProfile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");


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
                    setFirstName(response.data.user.firstName);
                    setLastName(response.data.user.lastName);
                    setEmail(response.data.user.email);
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const url = `/auth/updateUser/${localStorage.getItem("userId")}`;
        const fullUrl = `${host}${url}`;
        try {
            const response = await axios.patch(fullUrl, {
                firstName: firstName,
                lastName: lastName,
                email: email
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            if (response.status === 200) {
                console.log('User updated successfully');
                setFirstName(response.data.user.firstName);
                setLastName(response.data.user.lastName);
                setEmail(response.data.user.email);
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
                <form onSubmit={handleUpdate} >
                    <div className="test">
                        <FormInput label="First Name" placeholder={firstName} />
                        <FormInput label="Last Name" placeholder={lastName} />

                    </div>
                    {/* <FormInput label="Phone Number" placeholder="+990 3343 7865" /> */}
                    <FormInput label="email" placeholder={email} />
                    {/* <FormTextArea label="BIO" placeholder="Lorem ipsum dolor sit amet..." /> */}
                    <div className="form-buttons">
                        {/* <button type="button" className="cancel">Cancel</button> */}
                        <button type="submit" className="save">Save</button>
                    </div>
                </form>
            </div>

            {/* Your Photo Section */}

        </div>
    );
}

// Reusable Input Component
const FormInput = ({ label, placeholder }) => (
    <div className="form-group">
        <label>{label}</label>
        <input type="text" placeholder={placeholder} />
    </div>
);

// Reusable TextArea Component
const FormTextArea = ({ label, placeholder }) => (
    <div className="form-group">
        <label>{label}</label>
        <textarea placeholder={placeholder}></textarea>
    </div>
);

export default EditProfile;
