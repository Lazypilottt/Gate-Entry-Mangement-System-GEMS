import React from "react";
import { Link } from "react-router-dom"; 
import "./App.css"; 

function App() {
  return (
    <div style={{color: "white", fontFamily: "Arial, sans-serif" }}>   
    <br></br>
    <div class = 'container'>
    <main style={mainStyle}>
        <Section id="students" title="Students" description="40 students outside" link="/students" />
        <Section id="faculty" title="Faculty" description="50 faculty members logged" link="/faculty" />
        <Section id="visitors" title="Visitors" description="10 visitors in campus" link="/visitors" />
        <Section
          id="supportGroups"
          title="Private Support Groups"
          description="20 private support group members in campus"
          link="/supportGroups"
        />
        
      </main>
      <br></br>
      <footer style={footerStyle}>
        <p>&copy; 2024 Aditya Jha, Aditya Yadav, Agastya Nath</p>
      </footer>
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

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 2px -2px gray",
};

const navStyle = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
};

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
