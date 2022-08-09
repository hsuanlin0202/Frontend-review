import { Layout } from "components/layout";
import { useEffect, useState } from "react";

const IIFES = (): JSX.Element => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    if (posts.length > 0) return;
    // getPost();

    // using this feature only once.
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPosts(json);
    })();
  }, []);

  //   const getPost = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const json = await response.json();
  //     setPosts(json);
  //   };

  return (
    <Layout.Base title={"IIFEs"}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout.Base>
  );
};

export default IIFES;
