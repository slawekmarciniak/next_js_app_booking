import { useRouter } from "next/router";

const Posts = () => {
  const router = useRouter();
  console.log(router);
  //   const { slug } = router.query;

  return (
    <div>
      <h1>posts</h1>
    </div>
  );
};

export default Posts;
