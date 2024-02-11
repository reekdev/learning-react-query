import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PaginatedQueryExample from "./03.paginated-queries/components/PaginatedQueryExample";
import NotFound from "./NotFound";
import FetchDataExample from "./01.fetching-data/components/FetchDataExample";
import ParameterisedQueryExample from "./02.parameterized-queries/components/ParameterisedQueryExample";
import Index from "./Index";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "fetch-data",
        element: <FetchDataExample />,
      },
      {
        path: "parameterized-query",
        element: <ParameterisedQueryExample />,
      },
      {
        path: "paginated-data",
        element: <PaginatedQueryExample />,
      },
    ],
  },
  {
    path: "/index",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
