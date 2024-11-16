import React from 'react';
function EntryExit() {
    return (
        <div className="entry-exit-container">
            <>
          <div className="container">
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
          </>
           
        </div>
    );
}

export default EntryExit;
