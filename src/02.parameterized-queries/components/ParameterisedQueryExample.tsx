import { useState } from "react";
import usePosts from "../hooks/usePosts";

export default function ParameterisedQueryExample() {
  const [userId, setUserId] = useState<number | undefined>(undefined);

  const { data: posts, error, isLoading, isSuccess } = usePosts(userId);
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {isSuccess && (
        <ul className="list-group">
          {posts.map((post) => (
            <li className="list-group-item">{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
