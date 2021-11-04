import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  console.log(router.query);
  const { id, commentId } = router.query;

  return (
    <div>
      <h1>offer: {id}</h1>
      <h1>comment: {commentId}</h1>
    </div>
  );
};

export default Comment;
