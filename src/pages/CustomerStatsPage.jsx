import React from 'react';
import Sidebar from "../Components/Sidebar";
import CustomerStats from "../Components/CustomerStats";

const CustomerStatsPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <CustomerStats />
            </div>
        </div>
    );
};

export default CustomerStatsPage;