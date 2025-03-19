import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';

const CustomerStats = () => {
    const { customers } = useContext(CustomerContext);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Customer Stats</h2>
            <p>Total Customers: {customers.length}</p>
        </div>
    );
};

export default CustomerStats;