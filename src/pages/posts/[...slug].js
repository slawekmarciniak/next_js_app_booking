import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;

  return (
    <div>
      <h1>slug: {slug}</h1>
    </div>
  );
};

export default Post;
