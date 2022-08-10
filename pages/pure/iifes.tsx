import { Layout } from "components/layout";
import { useEffect, useState } from "react";

const IIFES = (): JSX.Element => {
  const [isShow, setShow] = useState<boolean>(true);

  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    if (!isShow) {
      setPosts([]);
      return;
    }

    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPosts(json);
    })();
  }, [isShow]);

  return (
    <Layout.Base title={"IIFEs"}>
      <>
        <p>
          <input
            className="mr-2"
            type="checkbox"
            id="cbox1"
            value="first_checkbox"
            onChange={(e) => setShow(e.target.checked)}
            checked={isShow}
          />
          <label className="text-black" htmlFor="cbox1">
            Show Posts
          </label>
        </p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    </Layout.Base>
  );
};

export default IIFES;
