import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllPosts, fetchPosts } from './postsSlice';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { Post } from "./Post";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";





const PostList = () => {
   const dispatch = useAppDispatch();

   const posts = useTypedSelector(selectAllPosts); 
  

   useEffect(() => {
    dispatch(fetchPosts());
  }, []);

   const orderedPosts = posts
        .slice()
        .sort((a: Post, b: Post) => b.datePosted.localeCompare(a.datePosted));
  
  const renderPosts = orderedPosts.map((post: Post) => (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.datePosted}/>
        </p>
        {/* <ReactionButtons post={post} /> */}
    </article>
  ));

  return (
    <section>
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostList;