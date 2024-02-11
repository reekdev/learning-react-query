import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <h3>404 Not Found</h3>
      <Link to="/">Go to home</Link>
    </>
  );
}
