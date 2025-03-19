import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';

const CustomerList = () => {
    const { customers, deleteCustomer } = useContext(CustomerContext);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Customer List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id} className="mb-2 p-2 bg-gray-100 rounded">
                        {customer.name} - {customer.email}
                        <button
                            onClick={() => deleteCustomer(customer.id)}
                            className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;