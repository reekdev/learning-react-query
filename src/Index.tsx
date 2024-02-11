import { Link } from "react-router-dom";

type RouteList = {
  to: string;
  description: string;
};

export default function Index() {
  const routeList: RouteList[] = [
    {
      to: "/fetch-data",
      description: "Fetch data example",
    },
    {
      to: "/parameterized-query",
      description: "Parameterized query example",
    },
    {
      to: "/paginated-data",
      description: "Paginated data example",
    },
  ];
  return (
    <>
      <div
        style={{
          padding: 16,
          minHeight: "100svh",
        }}
      >
        <ul>
          {routeList.map((rl) => (
            <li>
              <Link to={rl.to}>{rl.description}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
