import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [formData, setFormData] = useState({
        id: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();  // To navigate after successful login

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulating admin authentication (You can replace this with an API call)
        const { id, password } = formData;
        if (id === 'admin' && password === 'admin123') {  // Replace with real validation
            // Clear error and redirect to dashboard or any other page
            setError('');
            navigate('/dashboard');  // Redirect to a dashboard page (create this route)
        } else {
            setError('Invalid ID or Password');
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Admin ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default AdminLogin;
