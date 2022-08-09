import { Layout } from "components/layout";
import { memo, useEffect, useState } from "react";
const User1 = (props: PostTypes) => {
  console.log("user 1");
  return <div className="text-red-600">{props.title}</div>;
};

const User2 = (props: PostTypes) => {
  console.log("user 2");
  return <div className="text-green-600">{props.title}</div>;
};

const User3 = (props: PostTypes) => {
  console.log("user 3");
  return <div className="text-blue-600">{props.title}</div>;
};

type PostTypes = { id: number; title: string; userId: number };

type PostFactoryProps = {
  post: PostTypes;
  hard: boolean;
};
const PostFactory = ({ post, hard }: PostFactoryProps): JSX.Element => {
  const areEqual = (prevProps: PostTypes, nextProps: PostTypes) => {
    return prevProps.userId === nextProps.userId;
  };

  // cache data for avoiding expensive re-rendering.
  const User1Cache = memo(User1, areEqual);
  const User2Cache = memo(User2, areEqual);
  const User3Cache = memo(User3, areEqual);

  switch (post.userId) {
    case 1:
      if (hard) return <User1 {...post} />;
      return <User1Cache {...post} />;

    case 2:
      if (hard) return <User2 {...post} />;
      return <User2Cache {...post} />;

    case 3:
      if (hard) return <User3 {...post} />;
      return <User3Cache {...post} />;

    default:
      return <></>;
  }
};

const Factory = (): JSX.Element => {
  const [posts, setPosts] = useState<PostTypes[]>([]);

  const [isHardReload, setHardReload] = useState<boolean>(false);

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
  };

  useEffect(() => {
    if (posts.length > 0) return;

    getPost();
  }, []);

  const clickHandler = () => {
    getPost();
    setHardReload(true);
  };

  return (
    <Layout.Base title="The Factory Pattern">
      <div>
        {posts.map((post) => (
          <PostFactory key={post.id} post={post} hard={isHardReload} />
        ))}
        <button onClick={clickHandler}>Hard Reload</button>
      </div>
    </Layout.Base>
  );
};

export default Factory;
