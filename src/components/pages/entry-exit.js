import React, { useState } from 'react';
import axios from 'axios';

function EntryExit() {
    const [formData, setFormData] = useState({
        name: '',
        ID: '',
        category: 'Student', 
        date_time_of_arrival: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add-entry', formData);
            alert(response.data);
            setFormData({
                name: '',
                ID: '',
                category: 'Student',
                date_time_of_arrival: '',
            });
        } catch (error) {
            console.error('Error adding entry:', error);
            alert('Failed to add entry');
        }
    };
    return (
        <div className="entry-exit-container">  
            <div className="container">
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
                        Date of Arrival:
                        <input
                            type="datetime-local"
                            name="date_time_of_arrival"
                            value={formData.date_time_of_arrival}
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
                            <th>Date and Time of Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agastya Nath</td>
                            <td>12340140</td>
                            <td>Student</td>
                            <td>12/11/2024, 11:30 AM</td>
                        </tr>
                        {/* Additional rows can be added dynamically */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EntryExit;
