import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
    staleTime: 5 * 1000,
  });

export default usePosts;
