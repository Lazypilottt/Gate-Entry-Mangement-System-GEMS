# CSP203_Project1
Gate Entry Management System{GEMS} using MERN stack.

Submitted by: Aditya Kumar Yadav  Id : 12340100\
             Agastya Nath  Id:12340140\
             Aditya Jha Id:12340090



Gate Entry Management System

The Gate Entry Management System is a React-based web application that helps administrators manage entry and exit records for various categories such as students, faculty, visitors, and more. It includes features such as admin login, entry management, logout functionality, and dark mode support.
Features

    Admin Login: Allows administrators to log in using an ID and password.
    Entry Management: Enables users to add, view, and delete entries related to individuals (students, faculty, visitors, etc.).
    Logout: Provides a logout function to clear user data and redirect to the login page.
    Dark Mode: Users can toggle between dark and light mode for a better user experience.
    Category Management: Includes different categories like Student, Faculty, Private Support Group, Visitors, and Others.

Technologies Used

    React: For building the user interface and managing state.
    React Router DOM: For navigation between different routes in the application.
    Axios: For handling HTTP requests to interact with the backend API.
    CSS: For styling the application and implementing animations.
    LocalStorage/SessionStorage: For managing authentication and user session data.

Components
1. Admin Login

A login form that allows the admin to authenticate using a hardcoded Admin ID and Password. On successful login, the user is redirected to the dashboard page.

    Route: /admin-login
    Hardcoded credentials: ID: admin, Password: admin123
    On success: Redirects to the /dashboard route (you need to create the /dashboard route).

2. Entry Exit Management

This component allows the admin to:

    View Entries: Displays a list of existing entries (name, ID, category, time of departure/arrival).

    Add Entries: Adds a new entry with the user's details (name, ID, category, time of departure/arrival).

    Delete Entries: Deletes selected entries from the list.

    Route: /entry-exit

3. Logout

This component allows the admin to log out, which removes the user data from localStorage and sessionStorage. After a confirmation, the admin is redirected to the login page.

    Route: /logout
    Functionality:
        Asks for confirmation before logging out.
        Clears user session data.
        Redirects to the /admin-login page after a 5-second delay.

4. App (Main Container)

The App component provides a navigation interface for different sections of the Gate Entry Management System. It also supports a dark mode toggle that allows users to switch between light and dark themes.

    Sections:
        Students
        Faculty
        Visitors
        Private Support Groups
    Route Navigation: Links to /student, /faculty, /visitor, and /support.

API Endpoints (For Backend)

    GET /get-entry: Fetches a list of all entries.
    POST /add-entry: Adds a new entry to the system.
    POST /delete-entry: Deletes a specific entry.

Getting Started
Prerequisites

    Node.js and npm installed on your machine.

Installation

    Clone the repository:

git clone <repository_url>

Navigate to the project folder:

cd <project_directory>

Install dependencies:

npm install

Start the app:

    npm start

    The app should now be running at http://localhost:3000.

Usage

    Admin Login:
        Enter the admin credentials and log in.
        Upon successful login, you will be redirected to the /dashboard page (make sure this route exists).

    Entry Management:
        Click on Get Entries to view the list of all entries.
        Use the Add Entry form to add a new entry.
        Use the Delete Entry button to remove an entry.

    Logout:
        When you log out, a confirmation dialog will appear. If you confirm, the session data is cleared, and you are redirected to the login page.

    Dark Mode:
        You can toggle between dark and light modes using the dark mode button.


