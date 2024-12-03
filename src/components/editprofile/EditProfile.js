import React from "react";
import "./EditProfile.css";
import spider from '../../assets/spider.jpg';

function EditProfile() {
    return (
        <div className="form-container">
            {/* Personal Information Section */}
            <div className="personal-info">
                <h2>Personal Information</h2>
                <form>
                <div className="test">
                    <FormInput label="Full Name" placeholder="Spider" />
                    {/* <FormInput label="Phone Number" placeholder="+990 3343 7865" /> */}
                    <FormInput label="Email Address" placeholder="spider@gmail.com" />

                </div>
                    <FormInput label="Username" placeholder="spider" />
                    <FormTextArea label="BIO" placeholder="Lorem ipsum dolor sit amet..." />
                    <div className="form-buttons">
                        {/* <button type="button" className="cancel">Cancel</button> */}
                        <button type="submit" className="save">Save</button>
                    </div>
                </form>
            </div>

            {/* Your Photo Section */}
            <div className="your-photo">
                <h2>Your Photo</h2>
                <div className="photo-container">
                    <img
                        src={spider}
                        alt="Profile"
                        className="profile-photo"
                    />
                    <div className="photo-actions">
                        {/* <button>Delete</button> */}
                        <button>Update</button>
                    </div>
                    {/* <div className="upload-box">
                        <p>Click to upload or drag and drop</p>
                        <p>SVG, PNG, JPG or GIF (max, 800 X 800px)</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

// Reusable Input Component
const FormInput = ({ label, placeholder }) => (
    <div className="form-group">
        <label>{label}</label>
        <input type="text" placeholder={placeholder}  />
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
