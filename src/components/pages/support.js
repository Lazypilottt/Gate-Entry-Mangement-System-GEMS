import React, { useState } from 'react';
import axios from 'axios';

function EntryExit() {
    let [data, setData] = useState([{}]);

    // Function to fetch entries from the backend
    const getEntries = async (e) => {
        try {
            let temp_data = await axios.get('http://localhost:9000/get-entry-support');
            setData(temp_data.data);
            console.log(temp_data);
        } catch (error) {
            alert("Failed to get entry");
        }
    };

    // Map through the data and create rows dynamically
    const rows = data.map((item) => {
        console.log(item.name);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.time_of_departure}</td> {/* Updated to Time of Departure */}
                <td>{item.time_of_arrival}</td>
            </tr>
        );
    });

    return (
        <div className="entry-exit-container">
            <div className="container">
                {/* Get Entries Button */}
                <button type="submit" onClick={getEntries}>Get Entries</button>

                {/* Table to display entries */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Time of Departure</th> {/* Updated header */}
                            <th>Time of Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dynamically generated rows */}
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntryExit;
