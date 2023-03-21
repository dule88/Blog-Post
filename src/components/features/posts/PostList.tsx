import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllPosts, fetchPosts } from './postsSlice';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { Post } from "./Post";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Link } from 'react-router-dom';





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
        <h2>{post.title.substring(0, 28)}</h2>
        <p className="excerpt">{post.body.substring(0, 150)}...</p>
        <p className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.datePosted}/>
        </p>
        {/* <ReactionButtons post={post} /> */}
    </article>
  ));

  return (
    <section>
        
        {renderPosts}
    </section>
  )
}

export default PostList;