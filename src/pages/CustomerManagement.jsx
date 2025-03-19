import React from 'react';
import CustomerList from '../Components/CustomerList';
import AddCustomerForm from "../Components/AddCustomerForm"
import Sidebar from '../Components/Sidebar';

const CustomerManagement = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <AddCustomerForm />
                <CustomerList />
            </div>
        </div>
    );
};

export default CustomerManagement;