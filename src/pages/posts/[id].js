import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  console.log(post);
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <p>Post: {id}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}

export default Post;
