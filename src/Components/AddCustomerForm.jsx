import React, { useState, useContext } from 'react';
import CustomerContext from '../context/CustomerContext';

const AddCustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { addCustomer } = useContext(CustomerContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer({ name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl font-bold mb-4">Add Customer</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded mb-2"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded mb-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
};

export default AddCustomerForm;