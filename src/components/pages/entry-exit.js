import React from 'react';

function EntryExit() {
    return (
        <div className="entry-exit-container">
            <h1>Entry and Exit Logs</h1>
            <p>View or manage the records of people entering and exiting.</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Category</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agastya Nath</td>
                        <td>12340140</td>
                        <td>Student</td>
                        <td>12/11/2024, 11:30 AM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EntryExit;
