import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <ul>
     {posts.map((post) => (
       <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default PostList;