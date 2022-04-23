import "./Heading.css";
function Heading() {
  return (
    <div className="nav-bar">
      <h2 className="logo">amazon</h2>
      <ul className="nav-list">
        <li className="list-item">About</li>
        <li className="list-item">Contact</li>
        <li className="list-item">Address</li>
      </ul>
    </div>
  );
}

export default Heading;
