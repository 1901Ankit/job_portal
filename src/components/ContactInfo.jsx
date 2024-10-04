import React, { useState } from 'react';

const ContactInfo = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        state: '',
        postalCode: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) {
            newErrors.email = 'Email Address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email Address is invalid';
        }
        if (!formData.mobileNumber) {
            newErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile Number must be 10 digits';
        }
        if (!formData.address) newErrors.address = 'Current Address is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
            return;
        }

        // Show success message
        setSuccessMessage('Contact information saved successfully!');

        // Call the function to indicate completion and open the resume upload modal
        onComplete();

        // Reset the form fields
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            address: '',
            state: '',
            postalCode: '',
        });
        setErrors({}); // Reset errors

        // Optionally clear the success message when the user starts filling in the form again
    };

    return (
        <div className="px-5">
            <h3 className="font-bold">Contact Information</h3>
            {successMessage && (
                <p className="text-green-500 mt-2 font-semibold border border-green-500 p-2 rounded-md">
                    {successMessage}
                </p>
            )}
            <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex">
                    <div className="w-full me-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.firstName ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.lastName ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className="w-full me-6">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.email ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.mobileNumber ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="address">Current Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.address ? 'border-red-500' : 'border-[#93c3fd]'}`}
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                <div className="flex mt-4">
                    <div className="w-full me-6">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.state ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className={`block w-full mt-1 shadow-lg border-[1px] rounded-md py-2 ${errors.postalCode ? 'border-red-500' : 'border-[#93c3fd]'}`}
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                    </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition-colors">
                    Save & Continue
                </button>
            </form>
        </div>
    );
};

export default ContactInfo;
