import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  return (
    <div>
      <h1>slug: {id}</h1>
    </div>
  );
};

export default Post;
