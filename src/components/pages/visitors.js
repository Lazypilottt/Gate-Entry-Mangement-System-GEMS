import React, { useState } from 'react';
import axios from 'axios';

function EntryExit() {
    let [data, setData] = useState([]);  // Initialize as an empty array

    const getEntries = async () => {
        try {
            let temp_data = await axios.get('http://localhost:9000/get-entry-faculty');
            setData(temp_data.data);
            console.log(temp_data);
        } catch (error) {
            alert("Failed to get entry");
        }
    };

    const handleDelete = async (item, e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/delete-entry-faculty', item);
            alert("Entry deleted successfully");
            getEntries(); // Refresh the data after deletion
        } catch (error) {
            console.error("Error deleting entry:", error);
            alert("Failed to delete entry");
        }
    };

    const rows = data.map((item) => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.time_of_departure}</td>
            <td>{item.time_of_arrival}</td>
            <td>
                <button type="button" onClick={(e) => handleDelete(item, e)}>
                    Delete Entry
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="entry-exit-container">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Time of Departure</th>
                            <th>Time of Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntryExit;
