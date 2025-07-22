function Footer() {
 return (
   <footer className="footer">
      <p><strong>Rabbit Farm Manager</strong> — Track, Monitor & Plan Your Farm</p>
      <p>
        <a href="#dashboard" style={linkStyle}>Dashboard</a>|
        <a href="#rabbits" style={linkStyle}>All Rabbits</a>|
        <a href="#add-rabbit" style={linkStyle}>Add Rabbit</a>|
        <a href="#notifications" style={linkStyle}>Notifications</a>
      </p>
      <p>&copy; 2025 Rabbit Farm Manager. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
