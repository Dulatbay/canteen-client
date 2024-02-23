import  { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:5050/transactions');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Transaction List</h1>
            <ul className="divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                    <li key={index} className="py-4">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <p className="text-lg font-semibold mr-2">{transaction.location}</p>
                                <p className="text-lg mr-2">{transaction.resource}</p>
                                <p className="text-gray-500">{new Date(transaction.time).toLocaleString()}</p>
                            </div>
                            <p className="text-blue-500">{transaction.initiator}</p>
                        </div>
                        <p className="text-gray-600">ID: {transaction.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
