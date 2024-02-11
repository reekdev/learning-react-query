import FetchData from "./01.fetching-data/components/FetchDataExample";
import Parameterised from "./02.parameterized-queries/components/ParameterisedQueryExample";

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
        <Parameterised />
      </div>
    </>
  );
}

export default App;
