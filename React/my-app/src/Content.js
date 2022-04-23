function Content() {
  return (
    <div className="main-content">
      <form>
        <h3>Name</h3>
        <input type="text" className="text" required />
        <h3>Email</h3>
        <input type="text" className="email" required />
        <h3>Password</h3>
        <input type="password" className="password" required />
        <br />
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Content;
