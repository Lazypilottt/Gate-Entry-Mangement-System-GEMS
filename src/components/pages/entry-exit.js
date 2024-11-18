import React, { useState } from 'react';
import axios from 'axios';

function EntryExit() {
    const [formData, setFormData] = useState({
        name: '',
        ID: '',
        category: 'Student', 
        time_of_departure: '',
        time_of_arrival: '',
    });
    let [data, setData] = useState([{}]);

    const getEntries = async (e) => {
        try {
            let temp_data = await axios.get('http://localhost:9000/get-entry');
            setData(temp_data.data);
            console.log(temp_data);
        } catch (error) {
            alert("Failed to get entry");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/add-entry', formData);
            alert(response.data);
            setFormData({
                name: '',
                ID: '',
                category: 'Student',
                time_of_departure: '',
                time_of_arrival: '',
            });
        } catch (error) {
            console.error('Error adding entry:', error);
            alert('Failed to add entry');
        }
    };

    const handleDelete = async (item, e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/delete-entry', item);
            console.log('Entry deleted', response);
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    const rows = data.map((item) => {
        return (
            <tr key={item.ID}>
                <td>{item.name}</td>
                <td>{item.ID}</td>
                <td>{item.category}</td>
                <td>{item.time_of_departure}</td>
                <td>{item.time_of_arrival}</td>
                <td><button type="submit" onClick={e => handleDelete(item, e)}>Delete Entry</button></td>
            </tr>
        );
    });

    return (
        <div className="entry-exit-container">  
            <div className="container">
                <button type="submit" onClick={getEntries}>Get Entries</button>
                <form className="filter-section" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        ID No:
                        <input
                            type="text"
                            name="ID"
                            value={formData.ID}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Category:
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Student">Student</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Private Support Group">Private Support Group</option>
                            <option value="Visitors">Visitors</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>
                    <label>
                        Time of Departure:
                        <input
                            type="time"
                            name="time_of_departure"
                            value={formData.time_of_departure}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Time of Arrival:
                        <input
                            type="time"
                            name="time_of_arrival"
                            value={formData.time_of_arrival}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit">Add Entry</button>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Time of Departure</th>
                            <th>Time of Arrival</th>
                            <th></th>
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
