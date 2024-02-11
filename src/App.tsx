import FetchData from "./01.fetching-data/components/FetchDataExample";
import Parameterised from "./02.parameterized-queries/components/ParameterisedQueryExample";
import PaginatedQueryExample from "./03.paginated-queries/components/PaginatedQueryExample";

function App() {
  return (
    <>
      {/* <FetchData /> */}
      <div
        style={{
          padding: 16,
          minHeight: "100svh",
        }}
      >
        <PaginatedQueryExample />
      </div>
    </>
  );
}

export default App;
