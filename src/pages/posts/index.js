import { useEffect, useState } from "react";
import Head from "next/head";
import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((Response) => Response.json())
  //     .then((data) => setPosts(data.slice(0, 10)));
  // }, []);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <MainLayout>
        <h1>Posts</h1>
        {posts &&
          posts.map((post) => (
            <div key={`post-${post.id}`}>
              <h3>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h3>
              <p>{post.body}</p>
            </div>
          ))}
      </MainLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.slice(0, 10);
  console.log("hello");
  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

export default Posts;
