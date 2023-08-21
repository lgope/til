const Header = ({ showForm, setShowForm, appTitle = "Today I Learned" }) => (
  <header className="header">
    <div className="logo">
      <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
      <h1 className="header-text">{appTitle}</h1>
    </div>

    <button
      className="btn btn-large btn-open"
      // update state variable
      onClick={() => setShowForm((show) => !show)}>
      {showForm === true ? "Close" : "Share a Fact"}
    </button>
  </header>
);

export default Header;
