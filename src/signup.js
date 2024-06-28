import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        const nameRegex = /^[A-Za-z]+$/;

        if (!formData.fname.trim()) {
            validationErrors.fname = "First name is required!";
        } else if (!nameRegex.test(formData.fname)) {
            validationErrors.fname = "First name should contain only letters!";
        }

        if (!formData.lname.trim()) {
            validationErrors.lname = "Last name is required!";
        } else if (!nameRegex.test(formData.lname)) {
            validationErrors.lname = "Last name should contain only letters!";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required!";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            validationErrors.email = "Invalid email pattern!";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required!";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        }

        if (formData.cpassword !== formData.password) {
            validationErrors.cpassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="p-5 bg-light border rounded">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Sign Up</h1>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="fname"
                            className="form-control border"
                            placeholder="First Name"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {errors.fname && <span className="text-danger">{errors.fname}</span>}
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            className="form-control border"
                            placeholder="Last Name"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {errors.lname && <span className="text-danger">{errors.lname}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control border"
                            placeholder="abc123@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control border"
                            placeholder="Set Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="cpassword"
                            className="form-control border"
                            placeholder="Re-enter Password"
                            value={formData.cpassword}
                            onChange={handleChange}
                        />
                        {errors.cpassword && <span className="text-danger">{errors.cpassword}</span>}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
