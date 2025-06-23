import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Vivekanand College</div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/contact">Contact</a>
        <a href="/apply" className="apply-now">Apply Now!</a>
      </nav>
    </header>
  );
};

export default Header;