import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:3001/customers");
            console.log("Response:", response.data);
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    const addCustomer = async (customer) => {
        try {
            const response = await axios.post("http://localhost:3001/customers", customer);
            setCustomers([...customers, response.data]);
        } catch (error) {
            console.error("Error adding customer:", error);
        }
    };

    const deleteCustomer = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/customers/${id}`);
            setCustomers(customers.filter((customer) => customer.id !== id));
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};

export default CustomerContext;