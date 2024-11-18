import React, { useState } from 'react';
import axios from 'axios';

function EntryExit() {
    let [data, setData] = useState([{}]);
    const getEntries = async (e) => {
        try {
            let temp_data = await axios.get('http://localhost:9000/get-entry-support');
            //let temp_data = [{name: "Aniket", ID: "1234", category: "Student", date_of_arrival: "12", time_of_arrival: "38"}, {name: "Aniket", ID: "1234", category: "Student", date_of_arrival: "12", time_of_arrival: "38"}];
            setData(temp_data.data);
            console.log(temp_data);
        } catch (error) {
            alert("Failed to get entry");
        }
    };
   const rows = data.map((item) => {
        console.log(item.name);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.date_of_arrival}</td>
                <td>{item.time_of_arrival}</td>
            </tr>

        )
    });


    return (
        <div className="entry-exit-container">  
            <div className="container">
                <button type="submit" onClick={getEntries}>Get Entries</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Date of Arrival</th>
                            <th>Time of Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agastya Nath</td>
                            <td>12340140</td>
                            <td>Student</td>
                            <td>12/11/2024</td>
                            <td>11:30 AM</td>
                        </tr>
                        {/* Additional rows can be added dynamically */}
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EntryExit;
