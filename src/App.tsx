import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/index">Go to the index</Link>
        <Outlet />
      </div>
    </>
  );
}

export default App;
