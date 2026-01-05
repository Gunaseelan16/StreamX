import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <h1 className="logo">StreamX</h1>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
