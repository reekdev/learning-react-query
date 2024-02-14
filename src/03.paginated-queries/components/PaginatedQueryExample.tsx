import { useState } from "react";
import usePosts from "../hooks/usePosts";

export default function PaginatedQueryExample() {
  // const pageSize = 5;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const {
    data: posts,
    error,
    isLoading,
    isSuccess,
  } = usePosts({ page, pageSize });
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <>
      <p>select page size</p>
      <select
        onChange={(e) => setPageSize(parseInt(e.target.value))}
        style={{ marginBottom: 16 }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>

      {isSuccess && (
        <ul className="list-group">
          {posts.map((post) => (
            <li className="list-group-item">{post.title}</li>
          ))}
        </ul>
      )}

      <div>
        <button
          disabled={page === 1}
          className="btn btn-primary my-3 me-2"
          onClick={() => setPage(page - 1)}
        >
          previous
        </button>
        <button
          className="btn btn-primary my-3 me-2"
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </>
  );
}
