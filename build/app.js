class GateEntryManagementSystem extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1>Gate Entry Management System</h1>
                </header>
                
                <nav className="navbar">
                    <span>Home Page</span>
                    <span>Profiles</span>
                    <span>Entry/Exit</span>
                    <span>Log Out</span>
                </nav>
                
                <section className="filter-section">
                    <label>
                        Name:
                        <input type="text" />
                    </label>
                    <label>
                        Roll No:
                        <input type="text" />
                    </label>
                    <label>
                        Category:
                        <input type="text" />
                    </label>
                    <label>
                        Date of Arrival:
                        <input type="text" />
                    </label>
                </section>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
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
                        {/* Additional rows can be added here */}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<GateEntryManagementSystem />, document.getElementById('root'));
