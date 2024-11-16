import React from 'react';

function LogoutPage() {
  const handleRedirect = () => {
    // Redirect to the login page when the button is clicked
    window.location.href = '/login'; // Update with your actual login path
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="iit_bhilai_logo.png" alt="IIT Bhilai Logo" style={styles.logo} />
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>You've been logged out</h1>
        <button onClick={handleRedirect} style={styles.button}>
          Click here to log in again
        </button>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Aditya Jha, Aditya Yadav, Agastya Nath</p>
      </footer>
    </div>
  );
}

// Inline styles (similar to your original CSS)
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f4f4f4',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 2px -2px gray',
  },
  logo: {
    height: '50px',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#4CAF50',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#fff',
    boxShadow: '0 -4px 2px -2px gray',
  },
};

export default LogoutPage;