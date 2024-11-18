import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./App.css"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <div className={darkMode ? "dark-mode" : ""} style={{fontFamily: "Arial, sans-serif" }}>
      <div className="container">
        <main style={darkMode ? mainDarkStyle : mainStyle}>
          <Section id="students" title="Students" link="/student" /> 
          <Section id="faculty" title="Faculty" link="/faculty" />
          <Section id="visitors" title="Visitors" link="/visitor" />
          <Section
            id="supportGroups"
            title="Private Support Groups"
            
            link="/support"
          />
        </main><br></br>
        <footer style={footerStyle}>
          <p>&copy; GEMS - CSP203</p>
        </footer>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        <div className={`toggle-slider ${darkMode ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

const Section = ({ id, title, description, link }) => (
  <section id={id} style={sectionStyle}>
    <h2 style={{ color: "white" }}>{title}</h2>
    <p style={{ fontSize: "18px" }}>{description}</p>
    <Link to={link} style={buttonStyle}>
      Click here to see
    </Link>
  </section>
);

const mainStyle = {
  width: "80%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  color: "black",
};

const mainDarkStyle = {
  width: "80%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "#333",
  borderRadius: "10px",
  color: "white",
};

const sectionStyle = {
  backgroundColor: "#544A7F",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  textAlign: "center",
  color: "white",
};

const buttonStyle = {
  textDecoration: "none",
  color: "#544A7F",
  fontWeight: "bold",
  display: "inline-block",
  marginTop: "10px",
  backgroundColor: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "2px solid #544A7F",
};

const footerStyle = {
  width: "100%",
  textAlign: "center",
  padding: "10px 0",
  backgroundColor: "#fff",
  boxShadow: "0 -4px 2px -2px gray",
  color: "#555",
};

export default App;
